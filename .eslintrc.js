module.exports = {
  root: false,
  env: {
    es6: false,
    // es2021: true,
    node: false,
    browser: false
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript',
    'airbnb-base'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'comma-dangle': 'off',
    'no-irregular-whitespace': 'off', // 这禁止掉空格报错检查
    'no-trailing-spaces': 'off',
    // 'semi': ['error', 'always'],
    // 'object-curly-spacing': ['error', 'never'],
    // 'space-before-function-paren': ['error', 'never']
  },
  parser: 'babel-eslint',
  // parserOptions: {
  //   ecmaVersion: 7,
  //   sourceType: 'module',
  //   parser: '@typescript-eslint/parser',
  //   // ecmaFeatures: {
  //   //   jsx: true
  //   // }
  // }
}
