<template>
  <div class="page">
    <div class="page-header">
      <slot name="form"></slot>
    </div>

    <slot></slot>

    <div class="page-main">
      <slot name="chart"></slot>
    </div>
  </div>
</template>

<script>
import util from 'jo-util';

export default {
  props: {
  },
  data() {
    return {
    }
  },

  mounted() {
    // this.init();
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

      this.unbind = util.addEvent(window, 'resize', () => {
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

</style>
