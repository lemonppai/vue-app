import echarts from 'echarts';
import * as API from '@/api';
import util from 'lemon-util';

export default {
  data() {
    return {
      name: this.$route.name, // 对应的API名称
      url: null,  // 列表接口
      loading: false,
      visible: false,
      els: [],
      charts: [],
      form: {
      }
    }
  },

  mounted() {
    this.init();
  },

  beforeDestroy() {
    this.unbind && this.unbind();
  },

  methods: {
    // 刷新列表
   /*  refresh(callback) {

      // console.log('submit');
      if (API[this.name]) {

        this.loading = true;
        API[this.name].getChart(this.form, data => {
          this.loading = false;
          callback && callback(data);
        }).catch(() => this.loading = false);
      }
      else {
        console.warn('请定义页面name，或定义相应的API接口')
      }
    }, */

    init() {
      this.refresh();
      let i = 0;
      this.unbind = util.addEvent(window, 'resize', () => {
        if (++i % 2 == 0) return;
        this.charts.forEach(chart => {
          if (!chart._dom.hidden && document.body.contains(chart._dom)) {
            chart.resize()
          }
        });
      })
    },

    refresh() {
      console.warn('请定义refresh方法')
    },

    // 获取图表实例
    getChart(el) {
      let index = this.els.indexOf(el);
      let chart = this.charts[ index ];

      // 初始化图片
      if (!chart) {
        chart = echarts.init(el);
        this.charts.push(chart);
        this.els.push(el);
      }
      return chart;
    },

    // 图表渲染
    renderChart(el, option) {
      let chart = this.getChart(el);
      chart.setOption(option);
      chart.resize();
    },

    // 显示加载中
    showLoading() {
      this.charts.forEach(chart => chart.showLoading({
        text: '加载中'
      }));
    },

    // 隐藏加载中
    hideLoading() {
      this.charts.forEach(chart => chart.hideLoading());
    }
  }
}
