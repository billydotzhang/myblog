<template>
    <section>
      <header class="top_tips">
          <span class="num_tip" v-if="fatherComponent == 'home'">{{ level }}</span>
          <span class="num_tip" v-if="fatherComponent == 'item'">题目{{ itemNum }}</span>
      </header>

      <div v-if="fatherComponent == 'home' " class="container" >

          <router-link to="item" class="btn btn-red">开始做题</router-link>


      </div>

      <div v-if="fatherComponent == 'item' ">
          321
      </div>
    </section>
</template>

<script>

  import { mapState, mapActions } from 'vuex'

    export default {
      name: 'itemcontainer',
      data(){
          return{
            itemId:null,
            choosedNum:null,
            choosedId:null
            }
          },
      props:['fatherComponent'],
      computed:mapState ({
          itemNum:'itemNum',
          level:'level'
//        itemNum: state => state.itemNum,
//        level: state => state.level,
      })
    }
</script>

<style lang="less">
    .container{
      position: relative;
    }

    .btn{
      position: absolute;
      display: block;
      width: 4rem;
      height: 1rem;
      text-align: center;
      font-size: 0.7rem;
      left: 50%;
      top:16rem;
      margin-left: -2rem;
    }
    .btn-red{
      background-color: red;
    }
  .num_tip{
    float: right;
    color: #fff;
  }
</style>
