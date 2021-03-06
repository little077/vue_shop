import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
//导入基础样式
import  'assets/css/global.css'
import 'assets/fonts/iconfont.css'
import { Form, Message } from 'element-ui'
/**网络模块 */
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/' 
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.$message = Message
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
