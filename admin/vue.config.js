
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  publicPath:'./',
  productionSourceMap:false,
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'server': '@/server',
        'store' : '@/store',
        'utils' : '@/utils',
        'views': '@/views',
        'router': '@/router'
      }
    }
  },
  // proxyTable: {
  //   '/api/fiance_account': { //代理地址
  //     target:"http://192.168.43.114", //实际生产环境访问地址，该项目本机IP地址
  //     changeOrigin:true, //是否跨域
  //     pathRewrite: { //路径重写
  //       '^/api/fiance_account':'' //本身的接口地址没有'/api'，Rewrite本身有则去掉
  //     }
  //   }
  // }
}







