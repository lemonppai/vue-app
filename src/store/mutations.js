import types from './types';

export default {
  [types.INCREMENT](state) {
    state.count++;
  },

  // 设置页面标题
  [types.SETPAGETITLE](state, titles = []) {
    state.titles = titles;
  }
}
