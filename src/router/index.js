import { createRouter, createWebHashHistory } from 'vue-router'
import Inbox from '../views/Inbox.vue'

const routes = [
  {
    path: '/',
    name: 'Inbox',
    component: Inbox
  },
  {
    path: '/send',
    name: 'Send',
    component: () => import('../views/Send.vue')
  },
  {
    path: '/trash',
    name: 'Trash',
    component: () => import('../views/Trash.vue')
  },
  {
    path: '/spam',
    name: 'Spam',
    component: () => import('../views/Spam.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
