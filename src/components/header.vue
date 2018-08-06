<template>
  <div class="header" style="-webkit-app-region: drag">
    <div class="logo">
      LOGO
    </div>

    <div class="nav-tabs">
      <div :class="['nav-tabs-item', $route.name == item.code ? 'active' : null]" v-for="(item,key) in tabs" :key="key" @click="handleClick(item)">
        {{ item.label }}
      </div>
    </div>

    <div class="user-info">
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
import router from '@/router';

export default {
  data() {
    return {
      tabs: [
        {
          label: '首页',
          code: 'home',
          src: '/'
        },
        {
          label: '我的应用',
          code: 'apps',
          src: '/apps'
        },
        {
          label: '系统监控',
          code: 'system',
        },
        {
          label: '管理系统',
          code: 'manage',
        }
      ]
    }
  },
  methods: {
    handleClick(item) {
      // console.log(code);
      // this.activeName = item.code;

      router.push({
        path: item.src
      });
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

