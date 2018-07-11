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
          :current-page="pagination.pageIndex"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pagination.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pagination.total"
          style="text-align: right; padding: 6px;"
          @current-change="currentChange"
          @size-change="sizeChange"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { addEvent } from '@/utils';

export default {
  props: {
    pagination: {
      type: Object,
      default: () => {
        return {
          total: 0,
          pageIndex: 1,
          pageSize: 10
        }
      }
    }
  },
  data() {
    console.log(this.pagination)
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

    currentChange(val) {
      this.$emit('refresh', val);
    },

    sizeChange(val) {
      this.$emit('refresh', 1, val);
    }
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
