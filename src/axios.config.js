/**
 * 请求配置
 */

import axios from 'axios';
import loading from '@/utils/loading';
import { Message } from 'element-ui';
import { noop } from '@/utils';
import _ from 'lodash';

const instance = axios.create({
  baseURL: '/api'
});

// 用来控制最后才隐藏loading
let temp = 0;
const loadingStart = (config) => {
  // 加载中
  if (config.loading) {
    temp++;
    loading()
  }
}
const loadingEnd = (config) => {
  // 加载中
  if (config.loading) {
    if (--temp == 0) {
      loading('close')
    }
  }
}

// 添加请求拦截器
instance.interceptors.request.use(config => {
  loadingStart(config);
  return config;
}, err => {
  return Promise.reject(err);
})

// 添加响应拦截器
instance.interceptors.response.use(res => {
  loadingEnd(res.config);
  return res;
}, err => {
  loadingEnd(err.config);
  Message.error(err.message);
  return Promise.reject(err);
})

// 成功处理
instance.succ = (callback = noop) => {
  return (res) => {
    if (res.data.code == 'success') {
      callback(res.data);
    }
    else {
      Message.warn(res.msg);
    }
  }
}

export default instance;