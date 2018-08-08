<template>
  <div class="header" style="-webkit-app-region: drag">
    <div class="logo">
      LOGO
    </div>

    <div class="nav-tabs">
      <div :class="['nav-tabs-item', activeName == item.code ? 'active' : null]" v-for="(item,key) in tabs" :key="key" @click="handleClick(item)">
        {{ item.label }}
      </div>
    </div>

    <div class="user-info">
      <el-dropdown size="medium" placement="bottom" trigger="click" style="color: #fff; margin-right: 10px;">
        <span class="el-dropdown-link">
          <i class="el-icon-menu"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的应用</el-dropdown-item>
          <el-dropdown-item>系统监控</el-dropdown-item>
          <el-dropdown-item>管理系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium" trigger="click" style="color: #fff;">
        <span class="el-dropdown-link">
          用户名<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>登录</el-dropdown-item>
          <el-dropdown-item>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      activeName: null,
      tabs: [
        {
          label: '首页',
          code: 'home',
          path: '/'
        },
        {
          label: '我的应用',
          code: 'apps',
          path: '/apps/main'
        },
        {
          label: '系统监控',
          code: 'monitor',
          path: '/monitor'
        },
        {
          label: '管理系统',
          code: 'manage',
          path: '/manage'
        }
      ]
    }
  },

  computed: {
    ...mapState(['currentPaths'])
  },

  mounted() {
    /* this.$nextTick(() => {
      this.$nextTick(() => {
        this.activeName = this.$route.matched[0].name;
      });
    }); */

    this.$router.onReady(() => {
      // console.log(1);
      this.activeName = this.$route.matched[0].name;
    });
  },

  methods: {
    handleClick(item) {
      // console.log(code);
      // this.activeName = item.code;
      // console.log(this.$route)
      // console.log(this.currentPaths, this.currentPaths[ item.code ] )

      if (item.code != 'apps') {
        this.$router.push({
          path: this.currentPaths[ item.code ] || item.path
        });
      }
      else {
        this.$router.push({
          path: item.path
        });
      }

      this.activeName = item.code;
    }
  }
}
</script>

<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
}

.header {
  height: 50px;
  // border-right: solid 1px #e6e6e6;
  color: #fff;
  background-color: #545c64;

  .logo {
    // border-right: solid 1px #e6e6e6;
    display: inline-block;
    line-height: 50px;
    font-size: 20px;
    // text-align: center;
    text-indent: 1em;
    vertical-align: middle;
  }

  .nav-tabs {
    display: inline-block;
    margin-left: 20px;
    vertical-align: middle;

    .nav-tabs-item {
      display: inline-block;
      position: relative;
      padding: 4px 10px;
      cursor: pointer;

      &:after {
        content: "";
        position: absolute;
        left: 50%;
        right: 50%;
        bottom: -6px;
        // width: 100%;
        height: 2px;
        background-color: #fff;
        // transition: left .2s, right .2s;
      }

      &.active {

        &:after {
          left: 0;
          right: 0;
        }
      }
    }
  }

  .user-info {
    float: right;
    margin: 16px 12px;
    -webkit-app-region: no-drag;
  }
}
</style>

