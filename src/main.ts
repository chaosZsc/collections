import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store/index'

import Spinner from '@/components/Spinner/index'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Spinner)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
