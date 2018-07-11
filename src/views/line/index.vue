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
        <el-button type="primary" icon="el-icon-search" @click="refresh()">查询</el-button>
      </el-form-item>
    </el-form>

    <el-row style="padding: 10px 0; border-top: 1px solid #ebeef5;">
      <el-button icon="el-icon-plus" type="primary" @click="handleAdd">新增</el-button>
    </el-row>
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
