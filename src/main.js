import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import {send} from './utils/reqest' //封装请求
import utils from '../src/utils/utils'
import md5 from 'js-md5' //数据加密
import './style/publicKey.css' //全局默认样式
import 'lib-flexible'  //pc端兼容
Vue.prototype.request=send
Vue.prototype.utils=utils //公共方法
Vue.use(ElementUI)
Vue.prototype.$echarts=echarts
Vue.prototype.$md5=md5
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
