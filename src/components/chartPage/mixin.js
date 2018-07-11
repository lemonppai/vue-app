import echarts from 'echarts';
import * as API from '@/api';
import { addEvent } from '@/utils';

export default {
  data() {
    return {
      name: this.$route.name, // 对应的API名称
      url: null,  // 列表接口
      loading: false,
      visible: false,
      unbinds: [],
      charts: [],
      form: {
      }
    }
  },

  mounted() {
    this.refresh();
  },

  beforeDestroy() {
    this.unbinds.forEach(cb => cb());
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

    refresh() {
      console.warn('请定义refresh方法')
    },

    // 图表渲染
    renderChart(el, option) {
      let chart = echarts.init(el);
      chart.setOption(option);
      chart.resize();

      let fn = addEvent(window, 'resize', () => {
        chart.resize();
      })
      this.unbinds.push(fn);
    }
  }
}
