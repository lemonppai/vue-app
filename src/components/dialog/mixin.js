import * as API from '@/api';

export default {
  props: {
    /* visible: {
      type: Boolean,
      default: false
    } */

    row: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      name: this.$route.name,
      type: !this.row ? 'insert' : 'update',
      visible: true,
      // 表单
      form: {}
    }
  },

  computed: {
    title() {
      return this.type == 'insert' ? '新增' : '编辑';
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
    },

    // 表单提交
    submit() {
      // console.log(this.form);
      API.user[ this.type ](this.form, (data) => {
        // console.log(data);
        this.$message.success(data.message);
        this.close();
        this.$emit('refresh');
      })
    }
  },

  created() {
    console.log('created');
  }
};
