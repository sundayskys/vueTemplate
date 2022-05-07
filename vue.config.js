console.log('------------------------', process.env.VUE_APP_SERVER_URL)
console.log('========================', process.env.NODE_ENV)

//const { defineConfig } = require('@vue/cli-service')


module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === "production" ? "https://prdo.com" : "http://localhost:8040",
    outputDir: 'dist',
    assetsDir: '',
    devServer: {
        port: 8040,
        compress: true,
        // proxy: "http://localhost:8070"
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8030',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'        // 重定向到:http://192.168.1.16:8085/xxxx
                }
            },
            'prod': {
                target: 'http:127.0.0.1:8030',
                changeOrigin: true,
                pathRewrite: {
                    '^/prod': "/prod"  // 重定向到:http://192.168.1.16:8085/prod/xxxx
                }

            }

        }

    }

    // 基础路径
    // publicPath:"/",
    // devServer:{
    //     // 路由匹配路径
    //     '/api':{
    //         target:"http://localhost:3000",
    //         changeOrigin:true,
    //     }
    //
    // }

}
