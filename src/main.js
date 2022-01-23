import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 加载插件
// import components from './components'
// Vue.use(components)




import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
