import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import navpage from '@/components/nav/nav-page'
import shoppage from '@/components/shop/shop-page'
import { Lazyload } from 'vant' // 导入懒加载模块Lazyload
import img from '@/assets/loading(2).gif'
import Sliderdown from '@/components/sliderdown/slider-down'

Vue.use(Lazyload, {
  loading: img
}) // 注册懒加载指令

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('Navpage', navpage)
Vue.component('Shoppage', shoppage)
Vue.component('Sliderdown', Sliderdown)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
