import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LiveRecord from '../views/LiveRecord.vue'
import Recordings from '../views/Recordings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recordings',
    name: 'Recordings',
    component: Recordings
  },
  {
    path: '/live-record',
    name: 'LiveRecord',
    component: LiveRecord
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
