import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 100)
    })
  },
  history: createWebHistory('/portfolio/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/HomePage.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/components/About.vue'),
    },
  ],
})

export default router
