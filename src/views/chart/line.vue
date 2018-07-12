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
import moment from 'moment';
import ChartPage from "@/components/chartPage";
import mixPage from "@/components/chartPage/mixin";
import * as API from "@/api";

export default {
  mixins: [mixPage],
  components: {
    ChartPage
  },
  data() {
    return {
      form: {
        date: moment(),
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
      this.showLoading();
      API[this.name]
        .getChart(this.form, data => {
          this.hideLoading();
          this.render(data);
        })
        .catch(() => this.hideLoading());
    },

    render(data) {
      console.log(data);
      let option = {
        color: ['#3398DB'],
        xAxis: {
          type: "category",
          data: data.data.map(item => item.name)
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: data.data.map(item => item.count),
            type: "line"
          }
        ]
      };

      this.renderChart(this.$refs.chart, option);
    }
  }
};
</script>
