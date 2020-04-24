<template>
    <transition name="card">
        <div class="article">

            123

        </div>
    </transition>
</template>

<script>
    export default {
        name: "Article"
    }
</script>

<style scoped lang="less">
    @import "~assets/css/common.less";

    .article {
        width: 700px;
        height: 400px;
        margin: 0 auto;
        background: bisque;
        background: @bg-color;
    }

    .card-enter {
        /*transition: all .4s;*/
        color: #fff;
        opacity: 0;
        /*transform: scale(0);*/
    }
    .card-enter-active {
        transition: all .5s;
    }
    .card-enter-to {
        color: red;
        opacity: 1;
        /*transform: scale(1);*/
    }
</style>
