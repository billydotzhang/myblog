// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import routes from './router'
import VueRouter from 'vue-router'
import store from './store'
import './assets/style/common.less'
import '../config/rem'
// import ajax from '../config/ajax'


Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
}).$mount('#app')

