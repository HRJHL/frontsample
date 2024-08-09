// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Message from '@/views/Message.vue';
import Credit from '@/views/Credit.vue';
import CreditLog from '@/views/CreditLog.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import Pay from '@/views/Pay.vue';
import SuccessPage from '@/views/SuccessPage.vue';
import SearchL from '@/views/SearchL.vue';
import SearchP from '@/views/SearchP.vue';
import UserPage from '@/views/UserPage.vue';
import UserPage2 from '@/views/UserPage2.vue';
import ManegerPage from '@/views/ManegerPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/credit',
    name: 'Credit',
    component: Credit
  },
  {
    path: '/creditlog',
    name: 'CreditLog',
    component: CreditLog
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/pay',
    name: 'Pay',
    component: Pay
  },
  {
    path: '/success',
    name: 'Success',
    component: SuccessPage
  },
  {
    path: '/searchL',
    name: 'SearchL',
    component: SearchL
  },
  {
    path: '/searchP',
    name: 'SearchP',
    component: SearchP
  },
  {
    path: '/userpage',
    name: 'UserPage',
    component: UserPage
  },
  {
    path: '/userpage2',
    name: 'UserPage2',
    component: UserPage2
  },
  {
    path: '/manegerpage',
    name: 'ManegerPage',
    component: ManegerPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;