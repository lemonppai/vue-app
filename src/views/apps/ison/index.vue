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
          url: '',
          title: '可视化配置',
          icon: 'location',
          children: [
            {
              url: '/apps/ison/visualize/project',
              title: '方案配置'
            },
            {
              url: '/apps/ison/visualize/base',
              title: '基础配置'
            }
          ]
        }
      ]
    }
  }
}
</script>
