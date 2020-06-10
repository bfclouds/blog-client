<template>
    <div class="side-other">
        <ul class="other-other-list">
            <li>减肥很难吗</li>
            <li>我们健身吧</li>
            <li>我们健身吧</li>
            <li>我们健身吧</li>
            <li>我们健身吧</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "SideOther"
    }
</script>

<style scoped lang="less">
    .side-other {
        width: @side-width;
        background: @bg-color;
        margin: 30px auto;
        .other-other-list {
            line-height: 30px;
            margin-left: 30px;
            color: @font-color;
        }
    }
</style>
