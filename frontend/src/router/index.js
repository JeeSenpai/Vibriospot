import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import TermConsView from '@/views/TermConsView.vue'
import HomePage from '@/components/HomePage.vue'
import MenuPage from '@/components/MenuPage.vue'
import AboutPage from '@/components/AboutPage.vue'
import SettingsPage from '@/components/SettingsPage.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView,
    children: [
        {
          path: '/home',
          alias: '/home',
          component: HomePage,
          meta: { title: 'Home', icon: 'mdi-home-circle' }
        },
        {
          path: '/menu',
          alias: '/menu',
          component: MenuPage,
          meta: { title: 'Menu', icon: 'mdi-menu' }
        },
        {
          path: '/about',
          alias: '/about',
          component: AboutPage,
          meta: { title: 'FAQ', icon: 'mdi-help-network' }
        },
        {
          path: '/settings',
          alias: '/setting',
          component: SettingsPage,
          meta: { title: 'Settings', icon: 'mdi-cog-outline' }
        }
      ]
  },
  {
    path: '/terms-and-condition',
    name: 'terms',
    component: TermConsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
