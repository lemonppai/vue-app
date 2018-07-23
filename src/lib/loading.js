// 显示/隐藏loading

import { Loading } from 'element-ui';
// loading实例
let loadingInstance = null;

const loading = (type = 'show') => {
  if (type == 'show') {
    if (!loadingInstance) {
      loadingInstance = Loading.service({
        fullscreen: true,
        text: '加载中',
        background: 'rgba(255,255,255,.5)'
      });
    }
  }
  else if (type == 'close') {
    if (loadingInstance) {
      loadingInstance.close();
      loadingInstance = null;
    }
  }
}

export default loading;
