import Vue from 'vue';
import Router from 'vue-router';
import Attendance from './views/Attendance.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'attendance',
      component: Attendance,
    },
    {
      path: '/administrator/:page?',
      name: 'administrator',
      // component: () => import(/* webpackChunkName: "administrator" */ './views/Administrator.vue'),
    },
    {
      path: '/user/:uid?',
      name: 'user',
      // component: () => import(/* webpackChunkName: "user" */ './views/User.vue'),
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      // component: () => import(/* webpackChunkName: "leaderboard" */ './views/Leaderboard.vue'),
    },
    {
      path: '/statistics',
      name: 'statistics',
      // component: () => import(/* webpackChunkName: "statistics" */ './views/Statistics.vue'),
    },
    {
      path: '/login',
      name: 'login',
      // component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
      path: '/examples',
      name: 'examples',
      component: () => import(/* webpackChunkName: "examples" */ './views/Examples.vue'),
    },
  ],
});
