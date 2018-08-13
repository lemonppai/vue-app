<template>
  <div class="server">
    <el-row :gutter="20">
      <el-col :span="14">
        <v-panel title="CPU使用率">
          <div ref="cpu" style="height: 260px;"></div>
        </v-panel>
      </el-col>

      <el-col :span="10">
        <v-panel title="硬盘使用情况">
          <div ref="disk" style="height: 260px;"></div>
        </v-panel>
      </el-col>

      <el-col :span="14">
        <v-panel title="内存使用情况">
          <div ref="ram" style="height: 260px;"></div>
        </v-panel>
      </el-col>

      <el-col :span="10">
        <v-panel title="服务器信息">
          <div ref="ratio" style="height: 260px;"></div>
        </v-panel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts';
import VPanel from '@/components/panel';

export default {
  components: {
    // HelloWorld
    VPanel
  },

  data() {
    return {
      charts: []
    }
  },

  mounted() {
    this.renderCPU();
    this.renderDisk();
    this.renderRAM();
  },

  methods: {
    renderCPU() {
      const echart = echarts.init(this.$refs.cpu);
      echart.setOption({
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              smooth: true
          }]
      });
      this.charts.push(echart);
    },

    renderDisk() {
      const echart = echarts.init(this.$refs.disk);
      echart.setOption({
        title : {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      });
      this.charts.push(echart);
    },

    renderRAM() {
      const echart = echarts.init(this.$refs.ram);
      echart.setOption({
        xAxis: {},
        yAxis: {},
        series: [{
            symbolSize: 20,
            data: [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]],
            type: 'line'
        }]
      });
      this.charts.push(echart);
    }
  }
}
</script>

<style lang="scss" scoped>
.server {
  padding: 10px;
}
</style>

