<template>
  <div class="demo">
    <h3>点击列表项隐藏</h3>

    <div v-for="(item,key) in dataList" :key="key" v-show="item.visible" @click="handleClick(item)">
      {{ item.name }}
    </div>

    <button @click="showAll">显示全部</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        {
          name: '项目A',
          // 控制显示
          visible: true
        },
        {
          name: '项目B',
          // 控制显示
          visible: true
        },
        {
          name: '项目C',
          // 控制显示
          visible: true
        }
      ]
    }
  },
  methods: {
    handleClick(item) {
      item.visible = false;
    },
    // 显示全部
    showAll() {
      this.dataList.forEach(item => {
        item.visible = true;
      });
    }
  }
}
</script>
