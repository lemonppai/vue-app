/**
 * 接口
 */

import instance from '@/axios.config.js';

export const insertMenu = (param, callback) => {
  return instance({
    method: 'post',
    url: '/user',
    data: param,
    loading: true,
  }).then(instance.succ(callback));
}
