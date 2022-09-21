import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import router from './router'
// 引入js适配移动端
// import './assets/js/phone'
import './assets/cs/base.css'
// 使用开发插件
import MyEcharts from './plugin/echart.js'


Vue.config.productionTip = false
Vue.use(MyEcharts)
Vue.use(ElementUI, axios);
// console.log("hh");
// Vue.prototype.$echarts = Echarts;
// 申明全局过滤器
// 接收格式化数据dtStr
Vue.filter('dateFormat', (date) => {
  const dt = new Date(date);
  const y = padZero(dt.getFullYear());
  const m = padZero(dt.getMonth() + 1);
  const d = padZero(dt.getDate());

  const hh = padZero(dt.getHours());
  const mm = padZero(dt.getMinutes());
  const ss = padZero(dt.getSeconds());

  return `${y}-${m}-${d}  ${hh}:${mm}:${ss} `
})
// 声明补0函数
function padZero(n) {
  return n > 9 ? n : '0' + n;
}

// var express = require('express');
// var proxy = require('http-proxy-middleware');

// var app = express();

// app.use('/ug', proxy({ target: 'https://c.m.163.com/', changeOrigin: true }));
// app.listen(8080);




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
