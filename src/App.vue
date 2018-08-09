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
          <v-header></v-header>
        </el-header>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import VHeader from './components/header';

export default {
  components: {
    VHeader
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
