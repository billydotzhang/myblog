<template>
    <div class="home_container">
        <itemcontainer father-component="home">
          1231
        </itemcontainer>
    </div>
</template>
<style>
    body{
        background-color:yellow;
        font-size:16px;
    }
</style>
<script>
    import itemcontainer from '../../components/itemcontainer'

    export default{
        name:'home',
        components:{
            itemcontainer
        }
    }
</script>
