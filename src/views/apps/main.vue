<template>
  <div style="padding: 10px;">
    <el-row :gutter="12">
      <el-col v-for="(item,key) in apps" :key="key" :xs="12" :sm="8" :md="6" :lg="4">
        <el-card shadow="hover">
          <header @click="handleClick(item)">
            {{ item.title }}
          </header>
          <section>
            {{ item.remark }}
          </section>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import router from '@/router';
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      apps: [
        {
          title: '载波调度',
          path: '/apps/ison',
          code: 'ison',
          remark: '应用名或者副标题'
        }
      ]
    }
  },

  computed: {
    ...mapState(['currentPaths'])
  },

  methods: {
    handleClick(item) {
      router.push({
        path: this.currentPaths.apps[ item.code ] || item.path
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  margin-bottom: 4px;
  height: 160px;
  cursor: pointer;

  header {
    font-weight: bold;
  }

  section {
    margin-top: 10px;
  }
}
</style>
