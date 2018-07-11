<template>
  <chart-page @refresh="refresh">
    <el-form slot="form" :inline="true" :model="form">
      <el-form-item label="日期">
        <!-- <el-input v-model="form.user" placeholder="审批人"></el-input> -->
        <el-date-picker v-model="form.date"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="refresh()">查询</el-button>
      </el-form-item>
    </el-form>

    <div slot="chart" ref="chart" style="height: 500px;"></div>
  </chart-page>
</template>

<script>
import ChartPage from "@/components/chartPage";
import mixPage from "@/components/chartPage/mixin";
import * as API from '@/api';

export default {
  mixins: [mixPage],
  components: {
    ChartPage
  },
  data() {
    return {
      form: {
        date: null,
        name: ""
      }
    };
  },

  mounted() {
    // this.init();
    // this.refresh();
  },

  methods: {
    refresh() {
      this.loading = true;
      API[this.name].getChart(this.form, data => {
        this.loading = false;
        this.render123(data);
      }).catch(() => this.loading = false);
    },

    render123(data) {
      console.log(data)
      let option = {
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
          }]
      };

      this.render(this.$refs.chart, option);
    }
  }
};
</script>
