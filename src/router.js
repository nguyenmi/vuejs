import Vue from 'vue';
import Router from 'vue-router';
// import Login from '@/components/Login.vue';
// import Home from '@/components/Home.vue';
import Login from '@login';
import Home from '@home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/',
      component: Home,
      name: 'home',
      meta: { requiresAuth: true },
    },
  ],
});
