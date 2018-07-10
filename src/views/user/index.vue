<template>
  <page>
    <el-form slot="form" :inline="true" :model="form">
      <el-form-item label="日期">
        <!-- <el-input v-model="form.user" placeholder="审批人"></el-input> -->
        <el-date-picker v-model="form.date"></el-date-picker>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-row style="padding: 10px 0; border-top: 1px solid #ebeef5;">
      <el-button icon="el-icon-plus" type="primary" @click="handleAdd">新增</el-button>
    </el-row>

    <dialog-form v-if="visible" @close="visible = false" :row="row"></dialog-form>

    <el-table
      slot="table"
      v-loading="loading"
      :data="tableData"
      stripe
      border
      :style="{ width: '100%', height: '100%' }">
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="300">
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="text">编辑</el-button>
          <el-button class="color-danger" @click="handleDel(scope.row)" type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </page>
</template>

<script>
import DialogForm from '@/views/user/dialog';
import Page from '@/components/page';
import mixPage from '@/components/page/mixin';

export default {
  mixins: [mixPage],
  components: {
    DialogForm,
    Page
  },
  data() {
    return {
      form: {
        date: null,
        name: ''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },

  mounted() {
    // this.init();
  },

  methods: {
  }
}
</script>
