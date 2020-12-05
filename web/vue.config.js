module.exports = {
    publicPath: "./",
    configureWebpack: {
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.esm.js'
            }
        }
    },
    devServer: {
        port: 8081,
        proxy: {
            'https://yapi.baidu.com/mock/18128': {
                // 更改为部署服务器地址
                // target: "http://119.29.60.125",
                target: "https://yapi.baidu.com/mock/18128",
                changeOrigin: true,
            },
        },
    }
};
