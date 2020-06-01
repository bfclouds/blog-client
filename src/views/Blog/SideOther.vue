<template>
    <div class="side-other">
        <ul class="other-other-list">
            <li>罗志祥多人运动</li>
            <li>罗志祥管理时间</li>
            <li>罗志祥多人运动</li>
            <li>罗志祥多人运动</li>
            <li>罗志祥多人运动</li>
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
