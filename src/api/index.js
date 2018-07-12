/**
 * 接口
 */

import instance from '@/axios.config.js';

// 用户管理
export const user = {
  // 获取列表
  getList(param, callback) {
    return instance({
      method: 'get',
      url: '/user/getList',
      params: param,
      loading: false,
    }).then(instance.succ(callback));
  },

  // 新增
  insert(param, callback) {
    return instance({
      method: 'post',
      url: '/user/insert',
      data: param,
      loading: true,
    }).then(instance.succ(callback));
  },

  // 编辑
  update(param, callback) {
    return instance({
      method: 'post',
      url: '/user/update',
      data: param,
      loading: true,
    }).then(instance.succ(callback));
  },

  // 删除
  del(param, callback) {
    return instance({
      method: 'delete',
      url: '/user/delete',
      data: param,
      loading: true,
    }).then(instance.succ(callback));
  }
};

// 柱状图
export const bar = {
  getChart(param, callback) {
    return instance({
      method: 'get',
      url: '/bar/getChart',
      params: param,
      loading: false,
    }).then(instance.succ(callback));
  }
}

// 折线图
export const line = {
  getChart(param, callback) {
    return instance({
      method: 'get',
      url: '/line/getChart',
      params: param,
      loading: false,
    }).then(instance.succ(callback));
  }
}
