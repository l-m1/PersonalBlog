module.exports = {
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
    }
}
// module.exports = {
//   devServer: {
//     proxy: { //配置跨越
//       '/api': {
//         target:'http://127.0.0.1:3001', //后端服务器域名
//         changeOrigin:true,//允许跨域
//         pathReWrite: { //重写路径
//           '^/api':''
//         }
//       },
//     }
//   },
// }