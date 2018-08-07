import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    titles: [],
    currentPaths: {
      apps: {},       // 我的应用
      monitor: null,  // 系统监控
      manage: null    // 管理系统
    }
  },
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  }
})
