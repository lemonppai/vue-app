<template>
  <div class="header" style="-webkit-app-region: drag">
    <div class="logo">
      LOGO
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
  }

  .user-info {
    float: right;
    margin: 16px 12px;
    -webkit-app-region: no-drag;
  }
}
</style>

