<template>
    <div class="search-card">
        <Search></Search>
        <ul class="search-card-ul" @mouseleave="handleMouseLeave">
            <li @mouseenter="handleMouseEnter" v-for="item in articleTagList" :key="item.id"><a href="#">{{item.name}}</a></li>
        </ul>
        <div class="card-cover" :style="{top: coverTop + 'px'}"></div>
    </div>
</template>

<script>
    import Search from "components/common/Search";
    import request from "@/api/article.api.js"
    export default {
        name: "SideCard",
        data() {
          return {
              articleTagList: [{name: '全部文章', id: 1}, {name: '个人日记', id: 2}, {name: 'HTML5&CSS3', id: 3}, {name: 'JavaScript', id: 4}, {name: 'ASP.NET MVC', id: 5}, {name: '其他', id: 6}],
              coverTop: 56
          }
        },
        mouted() {
            // this.getArticleType()
        },
        methods: {
            handleMouseEnter(e) {
                this.coverTop = e.target.offsetTop;
            },
            handleMouseLeave() {
                this.coverTop = 56;
            },
            getArticleType () {
                request.getArticleType({}).then(res => {
                    console.log(res)
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
