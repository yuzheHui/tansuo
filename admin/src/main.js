import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false

// 每个功能写一个专门的js，方便引用和修改
import http from './http'
// 加载到vue实例属性上，可以在任何页面this.$http引用接口
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
