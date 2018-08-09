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
        /* {
          url: '/',
          title: '首页',
          icon: 'menu',
          children: []
        }, */
        {
          url: '',
          title: '管理平台',
          icon: 'setting',
          children: [
            {
              url: '/manage/user',
              title: '用户配置'
            },
            /* {
              url: '/map',
              title: '地图'
            }, */
          ]
        },

        {
          url: '',
          title: '图表',
          icon: 'picture',
          children: [
            {
              url: '/manage/chart/bar',
              title: '柱状图'
            },
            {
              url: '/manage/chart/line',
              title: '折线图'
            }
          ]
        },

        {
          url: '',
          title: '地图',
          icon: 'location',
          children: [
            {
              url: '/manage/map/migrate',
              title: '迁徙图'
            },
            {
              url: '/manage/map/heat',
              title: '热力图'
            }
          ]
        }
      ]
    }
  }
}
</script>
