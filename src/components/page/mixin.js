export default {
  data() {
    return {
      loading: false,
      visible: false,
      row: null,
      form: {},
      tableData: [],

    }
  },

  mounted() {
    // this.init();
  },

  methods: {
    onSubmit() {
      // console.log('submit');
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000)
    },

    // 新增
    handleAdd() {
      this.row = null;
      this.visible = true;
    },

    // 删除
    handleDel(row) {
      console.log('删除', row)
      this.$message.success('删除成功');
    },

    // 编辑
    handleEdit(row) {
      this.visible = true;
      this.row = row;
      console.log('编辑', row)
    }
  }
}
