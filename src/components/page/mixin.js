import * as API from '@/api';

export default {
  data() {
    return {
      name: this.$route.name, // 对应的API名称
      url: null,  // 列表接口
      loading: false,
      visible: false,
      row: null,
      form: {
      },
      // 分页信息
      pagination: {
        total: 0,
        pageIndex: 1,
        pageSize: 10
      },
      // 表格数据
      tableData: [],
    }
  },

  mounted() {
    // this.init();
    this.refresh();
  },

  methods: {
    // 刷新列表
    refresh(pageIndex = this.pagination.pageIndex, pageSize = this.pagination.pageSize) {

      // console.log('submit');
      if (API[this.name]) {
        /* this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 2000) */

        this.pagination.pageIndex = pageIndex;
        this.pagination.pageSize = pageSize;

        this.loading = true;
        API[this.name].getList({
          ...this.form,
          pageIndex: this.pagination.pageIndex,
          pageSize: this.pagination.pageSize
        }, data => {
          this.loading = false;
          this.pagination.total = data.data.total;
          this.tableData = data.data.rows;
        }).catch(() => this.loading = false);
      }
      else {
        console.warn('请定义页面name，或定义相应的API接口')
      }
    },

    // 新增
    handleAdd() {
      this.row = null;
      this.visible = true;
    },

    // 删除
    handleDel(event, row) {
      console.info('删除', row)

      let page = this.$refs.page || this.$children[0];
      page.showPopover(event.target, '此操作将无法恢复, 是否继续？', () => {
        API[this.name].del(row, data => {
          this.$message.success(data.message);
          this.refresh();
        })
      });
    },

    // 编辑
    handleEdit(row) {
      console.info('编辑', row)
      this.visible = true;
      this.row = row;
    }
  }
}
