// 基础路由，包含登录和404
import {RouteConfig} from 'vue-router';

export const routerBasic: RouteConfig[] = [
  {
    path: '/',
    name: 'App',
    component: () => import('@/App.vue')
  },
  {
    path: '/Exception',
    name: 'Exception',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/404.vue')
  },
];
