const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    host: 'localhost',
    // https:true,
    port: 8080,
    client: {
      webSocketURL: 'ws://localhost:8080/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // proxy: 'https://c.m.163.com'
    proxy: {
      '/api': {//api表示拦截以/api开头的请求路径

        target: 'https://c.m.163.com/ug/api', //跨域的域名(不需要写路径) 
        //ws: true, //是否代理websocked
        changeOringin: true,//是否开启跨域
        pathRewrite: {//重写路径
          '^/api': '' //把/api变为空字符
        }
      },
    }
  }, transpileDependencies: true
})
