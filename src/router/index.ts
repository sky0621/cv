import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import CatalogIndex from '../pages/catalog/Index.vue'
import CatalogButton from '../pages/catalog/Button.vue'
import CatalogSplitButton from '../pages/catalog/SplitButton.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/catalog',
    name: 'CatalogIndex',
    component: CatalogIndex,
  },
  {
    path: '/catalog/button',
    name: 'CatalogButton',
    component: CatalogButton,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
