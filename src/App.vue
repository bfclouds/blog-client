<template>
    <div id="root">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    @import "./assets/css/reset.css";
    #root {
        width: 100%;
        height: 100%;
        /*background: url("./assets/img/bg.jpg") no-repeat center center/cover fixed;*/
    }
    /* body {
        min-width: 1150px;
    } */
</style>
