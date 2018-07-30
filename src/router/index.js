import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

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
      path: '/map/migrate',
      name: 'migrate',
      component: () => import('@/views/map/migrate')
    },

    {
      path: '/map/heat',
      name: 'heat',
      component: () => import('@/views/map/heat')
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
