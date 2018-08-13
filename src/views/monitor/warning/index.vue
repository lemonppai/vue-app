<template>
  <div class="v-warning">
    <el-form :model="form" ref="form">
      <el-form-item prop="autoUp">
        <el-checkbox v-model="form.autoUp">当硬件超过特定值的时候自动报警</el-checkbox>
      </el-form-item>

      <el-form-item prop="autoUp">
        <div class="v-fc-wrap">
          当CPU温度超过
          <el-input v-model="form.val" style="width: 50px;"></el-input>
          摄氏度时自动报警
        </div>
      </el-form-item>

      <el-form-item prop="autoUp">
        <div class="v-fc-wrap">
          当内存剩余
          <el-input v-model="form.val" style="width: 50px; margin-left: 29px;"></el-input>
          GB时自动报警
        </div>
      </el-form-item>

      <el-form-item prop="autoUp">
        <div class="v-fc-wrap">
          当硬盘温度超过
          <el-input v-model="form.val" style="width: 50px;"></el-input>
          摄氏度时自动报警
        </div>
      </el-form-item>

      <el-form-item prop="autoUp">
        <div class="v-fc-wrap">
          当硬盘内存剩余
          <el-input v-model="form.val" style="width: 50px;"></el-input>
          GB时自动报警
        </div>
      </el-form-item>

      <el-form-item prop="autoUp">
        <el-checkbox v-model="form.autoUp">报警时，开启声音提示</el-checkbox>
      </el-form-item>

      <el-form-item prop="autoUp">
        <div class="v-fc-wrap">
          <el-input v-model="form.val" style="width: 300px; margin-right: 10px;"></el-input>

          <el-button type="primary">自定义声音</el-button>
        </div>
      </el-form-item>
    </el-form>

    <div style="display: none;">
      <vnode ref="vnode">
        <el-row :gutter="40">
          <el-col :span="12">
            <header style="padding: 10px; text-align: center;">
              CPU
            </header>
            <el-progress type="circle" :percentage="60" :width="100"></el-progress>
          </el-col>

          <el-col :span="12">
            <header style="padding: 10px; text-align: center;">
              硬盘
            </header>
            <el-progress type="circle" :percentage="40" :width="100"></el-progress>
          </el-col>
        </el-row>
        <div class="pull-right" style="margin-right: -26px; margin-bottom: -12px;">
          <el-button type="text" @click="handleClick">不再提醒</el-button>
        </div>
      </vnode>
    </div>
  </div>
</template>

<script>
import Vnode from './vnode';
export default {
  components: {
    Vnode
  },

  data() {
    return {
      form: {}
    }
  },

  mounted() {
    this.showWarning();
  },

  beforeDestroy() {
    this.notify.close();
  },

  methods: {
    // 显示预警
    showWarning() {
      console.log(this.$refs.vnode.$vnode)
      this.notify = this.$notify.warning({
        title: '硬盘告警',
        /* dangerouslyUseHTMLString: true,
        message: '<div style="width: 200px; height: 100px;">右下角弹出的消息</div>', */
        message: this.$refs.vnode.$vnode,
        position: 'bottom-right',
        duration: 0
      });
    },

    handleClick() {
      console.log('不再提醒')
    }
  }
}
</script>

<style lang="scss" scoped>
.v-fc-wrap {
  margin-left: 24px;
}
</style>
