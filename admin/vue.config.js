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