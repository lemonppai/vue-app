<template>
  <div class="desktop">
    <h3>桌面主站应用</h3>
    <router-link to="/desktop/a">页面a</router-link> |
    <router-link to="/desktop/message">页面message</router-link> |
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
