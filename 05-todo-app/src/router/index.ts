import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      redirect: { name: 'auth-login' },
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'auth-login',
          component: () => import('@/modules/auth/pages/LoginPage.vue')
        },
        {
          path: 'register',
          name: 'auth-register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue')
        },
      ]
    },
    {
      path: '/',
      name: 'todos',
      component: () => import('@/modules/todos/layout/TodosLayout.vue'),
      children: [
        {
          path: 'todos',
          name: 'todos-list',
          component: () => import('@/modules/todos/pages/TodosPage.vue'),
        },
        {
          path: 'todo/:id',
          name: 'todo',
          component: () => import('@/modules/todos/pages/TodoPage.vue'),
        },
        {
          path: 'edit-todo/:id',
          name: 'edit-todo',
          component: () => import('@/modules/todos/pages/EditTodoPage.vue'),
        },
      ]
    },
    {
      path: '/:patchMatch(.*)*',
      name: 'not-found',
      component: () => import('@/modules/common/pages/NotFoundPage.vue')
    }
  ],
})

export default router
