import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router';
import Home from '@/views/home.vue'
import Vuex from '@/views/vuex.vue'
import Test from '@/views/test.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router