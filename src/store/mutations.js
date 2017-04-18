const INITIALIZE_DATA = 'INITIALIZE_DATA'
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'

export default{

  [ADD_ITEMNUM](state,payload){
    state.itemNum += payload.num;
  },
  [REMBER_ANSWER](state,payload){
    state.answerid[state.itemNum] = payload.id;
  }


  // [INITIALIZE_DATA](state) {
  //   state.itemNum = 2;
  //   state.alltime = 0;
  // }
}

