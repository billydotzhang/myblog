<template>
    <div>
        <button @click='increment'>Icrement + 1</button>
    </div>
</template>
<style>
    button{
        background-color:red;
    }
</style>
<script>

    import { incrementCounter } from '../vuex/action'

    export default{
        vuex:{
            actions:{
                increment:incrementCounter
            }
        }
    }
</script>
