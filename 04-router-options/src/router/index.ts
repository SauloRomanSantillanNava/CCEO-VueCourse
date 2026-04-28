import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('@/views/Blogs.vue')
    },
    {
      path: '/blog/:id',
      name: 'item-blog',
      component: () => import('@/views/Blog.vue')
    },
  ],
})

export default router
