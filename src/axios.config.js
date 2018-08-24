/**
 * 请求配置
 */

import axios from 'axios';
import loading from '@/lib/loading';
import { Message } from 'element-ui';
// import util from 'jo-util';
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
instance.succ = (callback) => {
  return (res) => {
    if (res.data.status == 'ok') {
      callback && callback(res.data);
      return Promise.resolve(res.data);
    }
    else {
      Message.warning(res.data.msg);
      return Promise.reject(res.data);
    }
  }
}

export default instance;
