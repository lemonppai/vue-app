<template>
  <el-popover
    ref="popover"
    :placement="placement"
    :width="width">
    <p>{{ title }}</p>
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text" @click="handleCancel">取消</el-button>
      <el-button type="primary" size="mini" @click="handleOk">确定</el-button>
    </div>
  </el-popover>
</template>


<script>
import util from 'jo-util';

export default {
  data() {
    return {
      title: null,
      placement: 'left',
      width: '160'
    }
  },

  methods: {
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
      this.unbind = util.addEvent(document, 'click', (event) => {
        if (event.target != el) {
          this.hidePopover();
          this.unbind();
        }
      })
    },

    // 隐藏弹出框
    hidePopover() {
      let popover = this.$refs.popover;
      // popover.showPopper = false;
      popover.doClose();
    }
  }
}
</script>
