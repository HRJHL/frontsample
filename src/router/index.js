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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;