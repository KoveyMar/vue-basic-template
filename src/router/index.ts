import { routerBasic } from '@/router/router.basic';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router: any = new Router({
  // mode: 'history',
  routes: routerBasic
});

export default router;
