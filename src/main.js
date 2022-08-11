// тут подключаются все библиотеки
import Vue from 'vue'
import App from './App.vue'

import './assets/scss/main.scss' // подключаем стили и пешем npm install sass-loader node-sass --save-dev

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
