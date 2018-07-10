<template>
  <div class="page">
    <div class="page-header">
      <slot name="form"></slot>
    </div>

    <slot></slot>

    <div class="page-main">
      <div ref="tableWrap" :style="{ height: height + 'px' }">
        <slot name="table"></slot>

        <el-pagination
          :current-page="2"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          style="text-align: right; padding: 6px;"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { addEvent } from '@/utils';

export default {
  data() {
    return {
      height: 300
    }
  },

  mounted() {
    this.init();
  },

  methods: {
    resize() {
      let rect = this.$refs.tableWrap.getBoundingClientRect();
      let h = document.documentElement.clientHeight - rect.top - 50;
      // console.log(h)
      this.height = h;
    },

    init() {
      this.resize();

      addEvent(window, 'resize', () => {
        this.resize();
      })
    },
  }
}
</script>

<style lang="scss">
.el-pagination {
  .el-pagination__total, .el-pagination__sizes {
    float: left;
  }
}

.el-table__body-wrapper {
  height: calc(100% - 36px);
}

.color-danger {
  color: #F56C6C;

  &:hover, &:active, &:focus {
    // color: lighten(#F56C6C);
    color: #F56C6C;
  }
}
</style>
