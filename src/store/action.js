export default {
  addNum ({ commit , state }, id ){
    commit('REMBER_ANSWER',{ id })
      if (state.itemNum < state.itemNum.length){
        commit('ADD_ITEMNUM',{
          num:1
        })
      }
  },


  initializeData ({ commit }){
    commit('INITIALIZE_DATA')
  }
}
