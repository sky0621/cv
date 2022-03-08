import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouterOptions,
} from 'vue-router'

import BasicPage from '@/pages/Basic.vue'
import NotePage from '@/pages/Note.vue'
import SkillPage from '@/pages/Skill.vue'
import CareerPage from '@/pages/Career.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'BasicPage',
    component: BasicPage,
  },
  {
    path: '/note',
    name: 'NotePage',
    component: NotePage,
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

const router = createRouter(<RouterOptions>{
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
