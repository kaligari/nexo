import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import Prism from 'vue-prism-component'
import CssController from './components/CssController'

Vue.component('the-prism', Prism)
Vue.component('css-controller', CssController)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
