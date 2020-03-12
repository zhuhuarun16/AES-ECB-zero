import Vue from 'vue'
import App from './App'
import AES_API from './commons/js/AES_API.js'
Vue.prototype.AES_API = AES_API;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
