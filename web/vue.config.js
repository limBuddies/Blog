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
            '/api': {
                // 更改为部署服务器地址
                // target: "http://119.29.60.125",
                target: "http://127.0.0.1:8080",
                changeOrigin: true
            },
        },
    }
};
