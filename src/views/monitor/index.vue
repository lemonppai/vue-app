<template>
  <v-nav-page :menu-data="menuData"></v-nav-page>
</template>

<script>
import VNavPage from '@/components/nav-page';

export default {
  components: {
    VNavPage
  },
  data() {
    return {
      menuData: [
        {
          url: '/monitor/server',
          title: '服务器监控',
          icon: 'setting',
          children: []
        },

        {
          url: '/monitor/data',
          title: '数据监控',
          icon: 'setting',
          children: []
        },

        {
          url: '/monitor/warning',
          title: '智能预警',
          icon: 'setting',
          children: []
        }
      ]
    }
  }
}
</script>
