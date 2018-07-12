<template>
  <el-menu
    :router="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :default-active="activeIndex" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect" :collapse="isCollapse">
    <!-- <el-menu-item index="/">
      <i class="el-icon-menu"></i>
      <span slot="title">主页</span>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">管理平台</span>
      </template>
      <el-menu-item index="/desktop">
        <i class="el-icon-menu"></i>
        <span slot="title">桌面</span>
      </el-menu-item>
      <el-menu-item index="/map">
        <i class="el-icon-menu"></i>
        <span slot="title">地图</span>
      </el-menu-item>
    </el-submenu> -->
    <template v-for="(item,index) in menuData">
      <el-submenu :key="index" v-if="item.children.length" :index="item.title">
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </template>

        <el-menu-item :key="n" v-for="(item2,n) in item.children" :index="item2.url">
          <!-- <i class="el-icon-menu"></i> -->
          <span slot="title">{{ item2.title }}</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item :key="index" v-else :index="item.url">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      isCollapse: false,
      activeIndex: '/',
      // 菜单数据
      menuData: [
        {
          url: '/',
          title: '首页',
          icon: 'menu',
          children: []
        },
        {
          url: '',
          title: '管理平台',
          icon: 'setting',
          children: [
            {
              url: '/user',
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
              url: '/chart/bar',
              title: '柱状图'
            },
            {
              url: '/chart/line',
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
              url: '/map',
              title: '数据分析'
            }
          ]
        }
      ]
    };
  },
  mounted() {
    // console.log(this.$route.path)
    setTimeout(() => {
      this.activeIndex = this.$route.path;
      this.updateTitle(this.activeIndex);
    }, 500)
  },
  methods: {
    ...mapActions(['setTitle']),
    // 获取 title
    getTitle(url = null) {
      for (let i = 0; i < this.menuData.length; i++) {
        let item = this.menuData[i];
        if (item.url == url) return [item.title];

        for (let j = 0; j < item.children.length; j++) {
          let item2 = item.children[j];
          if (item2.url == url) return [item.title, item2.title];
        }
      }
    },

    updateTitle(url) {
      let title = this.getTitle(url);
      this.setTitle(title);
    },

    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      // console.log(this.$route)
      // console.log(this.getTitle(key));
      this.updateTitle(key);
    }
  }
};
</script>
