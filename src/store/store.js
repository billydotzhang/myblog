/**
 * Created by zhangcheng on 17/4/10.
 */

import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const state = {
    //TODO：放置初始状态
    count:0
}

const mutations = {
    //TODO：放置我们的状态更变函数
    INCREMENT (state, amount){
        state.count = state.count + amount
    }
}

export default new Vuex.Store({
    state,
    mutations
})