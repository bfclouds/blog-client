<template>
    <div class="search">
        <input class="blog-search-input" />
        <el-button icon="el-icon-search" size="small" class="search-icon" circle></el-button>
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped lang="less">
    @search-input-height: 40px;

    .search {
        position: relative;
        text-align: center;
        background: @main-color;
        overflow: hidden;
        .blog-search-input {
            display: inline-block;
            width: 70%;
            height: @search-input-height;
            margin: 8px 0;
            border: 0;
            border-radius: @search-input-height;
            outline: none;
            padding: 0 50px 0 12px;
        }
        .search-icon {
            position: absolute;
            top: 12px;
            right: 13px;
        }
    }
</style>
