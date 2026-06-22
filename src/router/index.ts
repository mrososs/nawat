import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView },
  // Interior pages are lazy-loaded so the landing route stays lean.
  { path: '/services', name: 'services', component: () => import('@/views/ServicesView.vue') },
  { path: '/projects', name: 'projects', component: () => import('@/views/ProjectsView.vue') },
  { path: '/partners', name: 'partners', component: () => import('@/views/PartnersView.vue') },
  { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
  { path: '/contact', name: 'contact', component: () => import('@/views/ContactView.vue') },
  // Unknown paths fall back to home.
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    // Honor back/forward scroll restoration; otherwise jump to top.
    return savedPosition ?? { top: 0 }
  },
})

export default router
