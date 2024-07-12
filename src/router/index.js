// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Message from '@/views/Message.vue';
import Credit from '@/views/Credit.vue';

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;