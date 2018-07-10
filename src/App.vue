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

      <el-aside width="260px">
        <ison-logo></ison-logo>
        <ison-nav style="height: calc(100% - 60px);"></ison-nav>
      </el-aside>
      <el-container>
        <el-header style="height: 46px; padding: 16px 12px; background-color: #f9f9f9;">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item,key) in titles" :key="key">{{ item }}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main style="padding: 10px;">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import IsonNav from './components/nav';
import IsonLogo from './components/logo';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    IsonNav,
    IsonLogo
  },
  computed: {
    ...mapState(['titles'])
  },
  methods: {
    ...mapActions(['setTitle'])
  },
  /* mounted() {
    console.log(this.$route)
  }, */
  watch: {
    '$route.query'() {
      // console.log(this.$route)
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
</style>
