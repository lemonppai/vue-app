<template>
  <el-menu
    :router="true"
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
  props: {
    menuData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isCollapse: false,
      activeIndex: null,
      loaded: false
    };
  },
  mounted() {
    // this.loaded = true;
    this.activeIndex = this.$route.path;
    this.updateTitle(this.activeIndex);
  },

 /*  watch: {
    '$route'() {
      if (!this.loaded) {
        this.loaded = true;
        this.activeIndex = this.$route.path;
        this.updateTitle(this.activeIndex);
      }
    }
  }, */

  methods: {
    ...mapActions(['setTitle', 'setCurrentPath']),
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
      return [];
    },

    updateTitle(url) {
      let titles = this.getTitle(url);
      // console.log(url)

      if (titles.length > 0) {
        switch (this.$route.matched[0].name) {
          case 'apps':
            titles.unshift('我的应用');
            break;
          case 'monitor':
            titles.unshift('系统监控');
            break;
          case 'manage':
            titles.unshift('管理系统');
            break;
        }
      }
      this.setTitle(titles);
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
      let name = this.$route.matched[0].name;
      let subName = this.$route.matched[1] ? this.$route.matched[1].name : null;

      this.setCurrentPath({
        name: name,
        subName: subName,
        path: key
      });
      this.updateTitle(key);
    }
  }
};
</script>
