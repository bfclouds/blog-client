<template>
    <div id="blog">
        <blog-header></blog-header>
        <div class="blog-wrapper">
            <div class="blog-content">
                <Article></Article>
            </div>
            <div class="blog-side">
                <side-card></side-card>
            </div>
        </div>
    </div>
</template>

<script>
    import BlogHeader from "../../components/Header";
    import SideCard from "./SideCard";
    import Article from "./Article";
    export default {
        name: "index",
        components: {
            BlogHeader,
            SideCard,
            Article
        }
    }
</script>

<style scoped lang="less">
    #blog {
        min-width: 800px;
        .blog-wrapper {
            display: flex;
            width: 90%;
            margin:0 auto;
            padding-top: 80px;
            .blog-content {
                flex: 1;
                margin-right: 300px;
            }
            .blog-side {
                position: fixed;
                top: 80px;
                right: 27px;
                width: 300px;
                height: 1000px;
            }
        }
    }
</style>
