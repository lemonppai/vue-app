<template>
  <page :pagination="pagination" @refresh="refresh">
    <el-form slot="form" :inline="true" :model="form">
      <el-form-item label="日期">
        <!-- <el-input v-model="form.user" placeholder="审批人"></el-input> -->
        <el-date-picker v-model="form.date"></el-date-picker>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="refresh(1)">查询</el-button>
      </el-form-item>
    </el-form>

    <template slot="button">
      <el-button icon="el-icon-plus" type="primary" @click="handleAdd">新增</el-button>
    </template>

    <dialog-form v-if="visible" @close="visible = false" :row="row" @refresh="refresh"></dialog-form>

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
import Page from '@/components/page';
import mixPage from '@/components/page/mixin';
import DialogForm from './dialog';

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
      }
    }
  },

  mounted() {
    // this.init();
  },

  methods: {
  }
}
</script>
