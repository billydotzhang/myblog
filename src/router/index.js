// import Vue from 'vue'
// import Router from 'vue-router'
// import VuexApp from '@/components/VuexApp'
// import Display from '@/components/Display'
//
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'store',
//       component: VuexApp
//     },
//     {
//       path: '/display',
//       name: 'display',
//       component: Display
//     }
//   ]
// })

import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
    }, {
        path: '/item',
        component: r => require.ensure([], () => r(require('../page/item')), 'item')
    }, {
        path: '/score',
        component: r => require.ensure([], () => r(require('../page/score')), 'score')
    }]
}]