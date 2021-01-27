import Vue from 'vue'
import VueRouter from 'vue-router'
import RU from '../views/RU.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/ru',
    name: 'RU',
    component: RU
  },
  {
    path: '/gb',
    name: 'GB',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GB.vue')
  },
  {
    path: '/usa',
    name: 'USA',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/USA.vue')
  },
  {
    path: '/de',
    name: 'DE',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DE.vue')
  },
  {
    path: '/fr',
    name: 'FR',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FR.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
