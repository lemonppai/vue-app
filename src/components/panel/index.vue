<template>
  <div class="panel">
    <div class="panel-header">
      {{ title }}

      <div class="setting">
        <el-dropdown size="medium" placement="bottom" trigger="click">
          <span class="el-dropdown-link">
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>刷新</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <div class="panel-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },

  }
}
</script>


<style lang="scss" scoped>
.panel {
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0,0,0,.3);
  border-radius: 4px;
  margin-bottom: 20px;

  .panel-header {
    padding: 10px 8px;
    border-bottom: 1px solid #ccc;

    .setting {
      float: right;
    }
  }

  .panel-body {
    padding: 10px;
  }
}
</style>
