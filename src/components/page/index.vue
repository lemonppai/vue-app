<template>
  <div class="page">
    <div class="page-header">
      <slot name="form"></slot>
    </div>

    <slot></slot>

    <el-popover
      ref="popover"
      placement="left"
      width="160">
      <p>{{ title }}</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="handleCancel">取消</el-button>
        <el-button type="primary" size="mini" @click="handleOk">确定</el-button>
      </div>
    </el-popover>

    <el-row style="padding: 10px 0; border-top: 1px solid #ebeef5;">
      <slot name="button"></slot>
    </el-row>

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
    // console.log(this.pagination)
    return {
      title: null,
      height: 300
    }
  },

  mounted() {
    this.init();
  },

  beforeDestroy() {
    this.unbind && this.unbind();
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

      this.unbind = addEvent(window, 'resize', () => {
        this.resize();
      })
    },

    currentChange(val) {
      this.$emit('refresh', val);
    },

    sizeChange(val) {
      this.$emit('refresh', 1, val);
    },

    handleShow(event) {
      this.showPopover(event.target, '此操作将无法恢复, 是否继续？', () => {
        console.log('ok');
      });
    },

    // 确定
    handleOk() {
      this.fnOk && this.fnOk();
      this.hidePopover();
    },

    // 取消
    handleCancel() {
      this.hidePopover();
    },

    // 显示弹出框
    showPopover(el, title, ok) {
      this.title = title;
      this.fnOk = ok;

      let popover = this.$refs.popover;
      popover.updatePopper();
      popover.referenceElm = el;
      popover.showPopper = true;

      this.$nextTick(() => {
        popover.popperJS._reference = el;
        popover.popperJS.state.updateBound();
      })

      this.unbind && this.unbind();
      this.unbind = addEvent(document, 'click', (event) => {
        if (event.target != el) {
          this.hidePopover();
          this.unbind();
        }
      })
    },

    // 隐藏弹出框
    hidePopover() {
      let popover = this.$refs.popover;
      popover.showPopper = false;
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
