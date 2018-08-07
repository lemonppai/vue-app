import types from './types';

export default {
  [types.INCREMENT](state) {
    state.count++;
  },

  // 设置页面标题
  [types.SETPAGETITLE](state, titles = []) {
    state.titles = titles;
  },

  // 设置当前菜单路径
  [types.SETCURRENTPATH](state, vals) {
    if (vals.name != 'apps') {
      state.currentPaths[ vals.name ] = vals.path;
    }
    else {
      state.currentPaths[ vals.name ][ vals.subName ] = vals.path;
    }
  }
}
