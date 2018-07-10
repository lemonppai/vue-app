const proxyTable = require('./proxy.config.js');

// 命令行参数
const argv = require('yargs')
  .option('env.proxy', {
    alias: 'proxy',
    default: 'dev'
  })
  .argv;

module.exports = {
  devServer: {
    port: 8080,
    proxy: proxyTable[ argv.proxy ]
  },

  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,

  css: {
    sourceMap: true
  }
}
