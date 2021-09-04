import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import BasicPage from '@/pages/Basic.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/basic',
    name: 'BasicPage',
    component: BasicPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
