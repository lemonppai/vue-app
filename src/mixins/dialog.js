
export default {
  props: {
    /* visible: {
      type: Boolean,
      default: false
    } */

    row: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      visible: true,
      // 表单
      form: {}
    }
  },

  watch: {
    visible(val) {
      this.visibleOpen = val;
    }
  },

  methods: {
    // 关闭窗口
    close() {
      console.log('close');
      this.visible = false;
      setTimeout(() => {
        this.$emit('close');
      }, 300)
    },

    leave() {
      console.log('leave');
    }
  },

  created() {
    console.log('created');
  }
};
