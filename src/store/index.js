import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    titles: []
  },
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  }
})
