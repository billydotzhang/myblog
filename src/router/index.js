import Vue from 'vue'
import Router from 'vue-router'
import VuexApp from '@/components/VuexApp'
import Display from '@/components/Display'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vuex',
      component: VuexApp
    }
  ]
})
