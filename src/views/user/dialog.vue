<template>
  <el-dialog :title="title" width="400px" :visible.sync="visible" @close="close" @leave="leave">
    <el-form :model="form" label-width="80px">
      <!-- <el-form-item label="活动名称">
        <el-input v-model="form.name" auto-complete="off" style="width: 300px;"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="颜色">
        <el-color-picker v-model="form.color" size="mini"></el-color-picker>
      </el-form-item>

      <el-form-item label="是否启用">
        <el-switch v-model="form.enable"></el-switch>
      </el-form-item> -->

      <el-form-item label="日期">
        <el-date-picker v-model="form.date" style="width: 280px;"></el-date-picker>
      </el-form-item>

      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="地址">
        <el-input type="textarea" v-model="form.address"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import mixinDialog from '@/components/dialog/mixin';
import moment from 'moment';
import * as API from '@/api';

export default {
  mixins: [mixinDialog],
  data() {
    console.log(this.row);

    return {
      form: {
        date: null,
        name: '',
        address: '',
        ...this.row
      }
    }
  },
  methods: {
  }
}
</script>

