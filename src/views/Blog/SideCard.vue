<template>
    <div class="search-card">
        <Search></Search>
        <ul class="search-card-ul" @mouseleave="handleMouseLeave">
            <li @mouseenter="handleMouseEnter" v-for="(item, index) in articleTagList" :key="index"><a href="#">{{item.tag}}</a></li>
        </ul>
        <div class="card-cover" :style="{top: coverTop + 'px'}"></div>
    </div>
</template>

<script>
    import Search from "components/common/Search";
    import request from "@/api/article.api.js";
    import Vue from "vue";

    export default {
        name: "SideCard",
        data() {
          return {
              articleTagList: [],
              coverTop: 56
          }
        },
        mounted() {
            this.getArticleType()
        },
        methods: {
            handleMouseEnter(e) {
                this.coverTop = e.target.offsetTop;
            },
            handleMouseLeave() {
                this.coverTop = 56;
            },
            getArticleType () {
                request.getArticleType().then(res => {
                    this.articleTagList = Vue.observable(res.data.data);
                    console.log(this.articleTagList)
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        components: {
            Search
        }
    }
</script>

<style scoped lang="less">
    .search-card {
        position: relative;
        width: @side-width;
        margin: 0 auto;
        background: @bg-color;
        .search-card-ul {
            color: @font-color;
            li {
                position: relative;
                z-index: 1;
                height: 40px;
                line-height: 40px;
                margin-left: 30px;
                &:last-child {
                    padding-bottom: 10px;
                }
            }
        }
        .card-cover {
            position: absolute;
            box-sizing: border-box;
            top: 56px;
            left: 0;
            width: 100%;
            height: 40px;
            border-right: 2px solid @main-color;
            background: transparent;
            transition: top .3s;
        }
    }
</style>
