module.exports = {
  // 本地
  local: {
    '/api': {
      target: 'http://127.0.0.1:8080'
    }
  },

  // 开发环境
  dev: {
    '/api': {
      target: 'http://127.0.0.1:8070'
    }
  },

  // 测试环境
  test: {
  },

  // 生产环境
  prod: {
  }
};
