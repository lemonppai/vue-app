/**
 * 接口
 */

import instance from '@/axios.config.js';

// 用户管理
export const user = {
  // 获取列表
  getList(param, success, complete) {
    return instance({
      method: 'get',
      url: '/user/getList',
      params: param,
      loading: false,
      complete: complete
    }).then(instance.succ(success));
  },

  // 新增
  insert(param, success) {
    return instance({
      method: 'post',
      url: '/user/insert',
      data: param,
      loading: true,
    }).then(instance.succ(success));
  },

  // 编辑
  update(param, success) {
    return instance({
      method: 'post',
      url: '/user/update',
      data: param,
      loading: true,
    }).then(instance.succ(success));
  },

  // 删除
  del(param, success) {
    return instance({
      method: 'delete',
      url: '/user/delete',
      data: param,
      loading: true,
    }).then(instance.succ(success));
  }
};

// 柱状图
export const bar = {
  getChart(param, success, complete) {
    return instance({
      method: 'get',
      url: '/bar/getChart',
      params: param,
      loading: false,
      complete: complete
    }).then(instance.succ(success));
  }
}

// 折线图
export const line = {
  getChart(param, success, complete) {
    return instance({
      method: 'get',
      url: '/line/getChart',
      params: param,
      loading: false,
      complete: complete
    }).then(instance.succ(success));
  }
}
