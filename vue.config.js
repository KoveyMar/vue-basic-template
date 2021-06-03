const path = require('path');
// const devServerPort = 7000;

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  filenameHashing: true,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // 生产环境 sourceMap
  productionSourceMap: false,
  // All options for webpack-dev-server are supported
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    open: false,
    // host: '0.0.0.0',
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: '0.0.0.0',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    overlay: {
      warnings: false,
      errors: false
    }
  },
  // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
  // corsUseCredentials: false,
  chainWebpack: (config) => {
    config.plugin('fork-ts-checker').tap(([options]) => {
      return [{
        // 一下几项都是推荐配置，async false使其可以在 页面上显示
        async: false,
        tslint: true,
        vue: true
      }];
    });
    // https://webpack.js.org/configuration/devtool/#development
    config
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      );
    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                commons: {
                  name: 'chunk-commons',
                  test: path.resolve(__dirname, 'src/components'),
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            });
          config.optimization.runtimeChunk('single');
        }
      );
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,
  // 第三方插件配置
  pluginOptions: {}
};
