import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import CatalogIndex from '../pages/catalog/Index.vue'
import CatalogButton from '../pages/catalog/Button.vue'
import CatalogGrid from '../pages/catalog/Grid.vue'
import CatalogMenubar from '../pages/catalog/Menubar.vue'
import CatalogAvatar from '../pages/catalog/Avatar.vue'

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
  {
    path: '/catalog/grid',
    name: 'CatalogGrid',
    component: CatalogGrid,
  },
  {
    path: '/catalog/menubar',
    name: 'CatalogMenubar',
    component: CatalogMenubar,
  },
  {
    path: '/catalog/avatar',
    name: 'CatalogAvatar',
    component: CatalogAvatar,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
