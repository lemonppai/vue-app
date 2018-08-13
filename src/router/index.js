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
      path: '/apps',
      name: 'apps',
      component: () => import('@/views/apps'),
      children: [
        {
          path: 'main',
          name: 'main',
          component: () => import('@/views/apps/main'),
        },
        {
          path: 'ison',
          name: 'ison',
          component: () => import('@/views/apps/ison'),
          children: [
            {
              path: 'visualize/project',
              name: 'project',
              component: () => import('@/views/apps/ison/visualize/project'),
            },
            {
              path: 'visualize/base',
              name: 'base',
              component: () => import('@/views/apps/ison/visualize/base'),
            }
          ]
        }
      ]
    },

    {
      path: '/monitor',
      name: 'monitor',
      component: () => import('@/views/monitor'),
      children: [
        {
          path: 'server',
          name: 'server',
          component: () => import('@/views/monitor/server')
        },

        {
          path: 'data',
          name: 'data',
          component: () => import('@/views/monitor/data')
        },

        {
          path: 'warning',
          name: 'warning',
          component: () => import('@/views/monitor/warning')
        }
      ]
    },

    {
      path: '/manage',
      name: 'manage',
      component: () => import('@/views/manage'),
      children: [
        {
          path: 'map/migrate',
          name: 'migrate',
          component: () => import('@/views/map/migrate')
        },

        {
          path: 'map/heat',
          name: 'heat',
          component: () => import('@/views/map/heat')
        },

        {
          path: 'user',
          name: 'user',
          component: () => import('@/views/user')
        },

        {
          path: 'chart/bar',
          name: 'bar',
          component: () => import('@/views/chart/bar')
        },

        {
          path: 'chart/line',
          name: 'line',
          component: () => import('@/views/chart/line')
        }
      ]
    },

    {
      path: '/blank',
      name: 'blank',
      component: () => import('@/views/blank')
    },
  ]
})
