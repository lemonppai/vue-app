import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/blank',
      name: 'blank',
      component: () => import('@/views/blank.vue')
    },

    {
      path: '/about',
      name: 'about',
      component: About
    },

    {
      path: '/map',
      name: 'map',
      component: () => import('@/views/map')
    },

    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/user')
    },

    {
      path: '/chart/bar',
      name: 'bar',
      component: () => import('@/views/chart/bar')
    },

    {
      path: '/chart/line',
      name: 'line',
      component: () => import('@/views/chart/line')
    }
  ]
})
