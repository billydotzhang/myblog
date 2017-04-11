<template>
    <div>
        <Display></Display>
        <Increment></Increment>
    </div>
</template>
<style>
    body{
        background-color:#ccc;
    }
</style>
<script>
    //vue
    import Display from './Display'
    import Increment from './Increment'
    //js
    import store from '../vuex/store'

    export default{
        name:'vuex',
        components:{
            Display:Display,
            Increment:Increment
        },
        store:store

    }
</script>
