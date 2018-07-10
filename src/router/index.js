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
      path: '/desktop',
      name: 'desktop',
      component: () => import('@/views/desktop.vue'),
      children: [
        {
          path: 'message',
          component: () => import('@/views/message.vue')
        },
      ]
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
      component: () => import('@/views/Map.vue')
    },

    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/user')
    }
  ]
})
