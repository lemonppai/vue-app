import types from './types';

export default {
  increment(context, val) {
    setTimeout(() => {
      context.commit(types.INCREMENT, val);
    }, 2000);
  },

  // 设置页面标题
  setTitle({ commit }, val) {
    commit(types.SETPAGETITLE, val);
  }
}
