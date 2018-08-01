import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      component: () => import('@/views/404')
    },

    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home')
    },

    {
      path: '/blank',
      name: 'blank',
      component: () => import('@/views/blank')
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
