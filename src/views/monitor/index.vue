<template>
  <el-container>
    <el-aside width="250px">
      <!-- <ison-logo></ison-logo> -->
      <ison-nav style="height: 100%" :menu-data="menuData"></ison-nav>
    </el-aside>
    <el-container style="padding: 0;">
      <el-header style="height: 46px; padding: 16px 12px; background-color: #f9f9f9;">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="(item,key) in titles" :key="key">{{ item }}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>

      <el-main style="padding: 10px;">
        <transition name="page" mode="out-in">
          <keep-alive :include="include">
            <router-view />
          </keep-alive>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import IsonNav from '@/components/nav';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    IsonNav
  },
  data() {
    return {
      // 缓存列表
      include: [],
      // 菜单数据
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
              url: '/monitor/user',
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
              url: '/monitor/chart/bar',
              title: '柱状图'
            },
            {
              url: '/monitor/chart/line',
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
              url: '/monitor/map/migrate',
              title: '迁徙图'
            },
            {
              url: '/monitor/map/heat',
              title: '热力图'
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapState(['titles'])
  },
  methods: {
    ...mapActions(['setTitle']),

    // 添加页面缓存
    addCache(name) {
      if (this.include.indexOf(name) == -1) {
        this.include.push(name);
      }
    },

    // 删除页面缓存
    removeCache(name) {
      let n = this.include.indexOf(name);
      if (n > -1) {
        this.include.splice(n, 1);
      }
    }
  },
  /* mounted() {
    console.log(this.$route)
  }, */
  watch: {
    '$route'() {
      this.addCache(this.$route.name);

      this.$nextTick(() => {
        // util.dispatchEvent('resize', window);
      });
    }
  }
}
</script>
