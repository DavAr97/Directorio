import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import authRouter from '../modules/auth/router'
import contactsRouter from '../modules/contacts/router'
import isAuthenticatedGuard from '../modules/auth/router/auth-guard'

const routes = [
  {
    path: '',
    name: 'login',
    component: LoginView
  },

  
  {
    path: '/auth',
    ...authRouter     
  },


  {
    path: '/contacts',
    beforeEnter: [isAuthenticatedGuard],
    ...contactsRouter     
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
