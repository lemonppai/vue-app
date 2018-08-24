<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="6">
        <v-panel title="上周地市量统计">
          <div class="subtitle">
            占所有小区的比例
          </div>

          <div ref="ratio" style="height: 300px;"></div>
        </v-panel>
      </el-col>

      <el-col :span="6">
        <v-panel title="全省GIS地图">
          <div ref="gis" style="height: 316px;"></div>
        </v-panel>
      </el-col>

      <el-col :span="12">
        <v-panel title="工单查询">
          <div ref="work" style="height: 316px;"></div>
        </v-panel>
      </el-col>

      <el-col :span="6">
        <v-panel title="警告">
          <div ref="warn" style="height: 316px;"></div>
        </v-panel>
      </el-col>

      <el-col :span="18">
        <v-panel title="上周调整工单统计">
          <div ref="warn" style="height: 316px;"></div>
        </v-panel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import echarts from 'echarts';
import 'echarts/map/js/province/jiangsu';
import util from 'jo-util';
import Dragin from 'jo-dragin';
import DraginResize from 'jo-dragin-resize';
import { mapState, mapMutations, mapAtions, mapActions } from 'vuex';
import loading from '@/lib/loading';
// import DialogForm from './dialog';
import VPanel from '@/components/panel';

export default {
  name: 'home',
  components: {
    // HelloWorld
    VPanel
  },
  data() {
    return {
      charts: []
    };
  },
  computed: {
    ...mapState(['count'])
  },

  activated() {
    this.resize();
  },

  mounted() {
    // console.log(this.increment);

    // console.log(this.$store);

    this.renderRatio();
    this.renderGIS();
    this.renderWork();

    this.unbind = util.addEvent(window, 'resize', () => {
      this.resize();
    })

    new Dragin(util.getEls('.panel')[0], {
      clone: true,
      limitX: [0, 800],
      limitY: [0, 800],
      start(x, y) {
        console.log('start', x, y);
      },
      move(x, y) {
        // console.log('move', x, y);
      },
      end: (x, y) => {
        // console.log('end', x, y);

        console.log(this.getCollEl(x, y))
      }
    })

    /* new DraginResize(this.$refs.ratio, {
      clone: true,
      start(x, y) {
        console.log('start', x, y);
      },
      move(x, y) {
        // console.log('move', x, y);
      },
      end: (x, y) => {
        // console.log('end', x, y);

        console.log(this.getCollEl(x, y))
      }
    }); */
  },

  methods: {
    resize() {
      this.charts.forEach(chart => {
        chart.resize();
      });
    },

    // 获取碰撞到的区域
    getCollEl(x, y) {
      var panels = util.getEls('.panel');
      for (let el of panels) {
        // console.log(el)
        let rect = util.getClientRect(el);
        if (util.testColl([x, y], [rect.x, rect.y, rect.width, rect.height])) {
          // console.log(el);
          return el;
        }
      }
      return null;
    },

    renderRatio() {
      const chart = echarts.init(this.$refs.ratio);
      chart.setOption({
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

      this.charts.push(chart);
    },

    renderGIS() {
      const chart = echarts.init(this.$refs.gis);
      chart.setOption({
        tooltip: { trigger: 'item', formatter: '{b}' },
        series: [
          {
              name: '江苏',
              type: 'map',
              mapType: '江苏',
              roam: true,
              scaleLimit: {
                  min: 1, max: 10
              },
              //selectedMode: 'multiple',
              label: {
                  normal: {
                      show: true,
                      textStyle: {
                          color: '#fff'
                      }
                  },
                  emphasis: {
                      show: true,
                      textStyle: {
                          color: '#fff',
                          fontSize: 16,
                          fontWeight: 'bold'
                      }
                  }
              },
              itemStyle: {
                  normal: {
                      borderColor: '#fff',
                      areaColor: '#389BB7'
                  },
                  emphasis: {
                      areaColor: '#ff7d36',
                      borderWidth: 0
                  }
              },
              data: [
                  { name: '南京市', selected: true }
              ]
          }
        ]
      });

      this.charts.push(chart);
    },

    renderWork() {
      const chart = echarts.init(this.$refs.work);
      chart.setOption({
          color: ['#3398DB'],
          tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis : [
              {
                  type : 'category',
                  data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                  axisTick: {
                      alignWithLabel: true
                  }
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name:'直接访问',
                  type:'bar',
                  barWidth: '60%',
                  data:[10, 52, 200, 334, 390, 330, 220]
              }
          ]
      });

      this.charts.push(chart);
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  // background-color: #ccc;
  padding: 10px;
  .line {
    text-align: center;
  }

  .subtitle {
    font-size: 14px;
    color: #aaa;
  }
}
</style>
