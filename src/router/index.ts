import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import BasicPage from '@/pages/Basic.vue'
import SkillPage from '@/pages/Skill.vue'
import CareerPage from '@/pages/Career.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'BasicPage',
    component: BasicPage,
  },
  {
    path: '/skill',
    name: 'SkillPage',
    component: SkillPage,
  },
  {
    path: '/career',
    name: 'CareerPage',
    component: CareerPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
