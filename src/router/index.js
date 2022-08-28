import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import contactsRouter from '../modules/contacts/router'

const routes = [
  {
    path: '',
    name: 'login',
    component: LoginView
  },
  {
    path: '/directorio',
    name: 'directorio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "directorio" */ '../views/DirectorioView.vue')
  },
  {
    path: '/contacts',
    ...contactsRouter
     
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
