<template>
  <div id="app">
    <el-container style="height: 100vh;">
      <!-- <el-header style="height: 30px;">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/map">Map</router-link> |
          <router-link to="/desktop">Desktop</router-link> |
        </div>
      </el-header>
      <el-main>
        <router-view/>
      </el-main> -->


      <el-container>
        <el-header style="padding: 0; height: 50px;">
          <ison-logo></ison-logo>
        </el-header>

        <el-container>
          <el-aside width="250px">
            <!-- <ison-logo></ison-logo> -->
            <ison-nav style="height: 100%"></ison-nav>
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
      </el-container>
    </el-container>
  </div>
</template>


<script>
import IsonNav from './components/nav';
import IsonLogo from './components/logo';
import { mapState, mapActions } from 'vuex';
import util from 'lemon-util';

export default {
  components: {
    IsonNav,
    IsonLogo
  },
  data() {
    return {
      // 缓存列表
      include: []
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


<style lang="scss">
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */

.page-enter-active, .page-leave-active {
  transition: opacity .5s, transform .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateY(-2%);
}

</style>
