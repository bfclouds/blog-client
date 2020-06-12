<template>
  <div id="blog">
    <div class="blog-content">
      <Article
        v-for="item of articleList"
        :article="item"
        :key="item.id"
        @clickGood="changeGoodState"
      ></Article>
      <div v-if="isBottom" class="ifBottom">我也是有底线的^_^</div>
    </div>
    <div class="blog-side hidden-md-and-down">
      <side-card></side-card>
      <side-other></side-other>
    </div>
  </div>
</template>

<script>
    import SideCard from "./SideCard";
    import SideOther from "./SideOther";
    import Article from "./Article";
    import request from "@/api/article.api.js"

    export default {
        name: "index",
        data() {
            return {
                articleList: [],
                page: {
                    currentPage: 1,
                    pageSize: 10,
                    total: 0,
                },
                isBottom: false,
                timmer: 0
            }
        },
        mounted() {
            addEventListener('scroll', this.ifCanLoading)
            this.loadArticle(this.page.currentPage)
        },
        methods: {
            changeGoodState(newArticle) {
                this.$set(this.article, newArticle.id - 1, newArticle);
            },
            loadArticle (currentPage) {
                let params ={
                  params: {
                      currentPage: currentPage,
                      pageSize: this.page.pageSize
                  }
                }
                request.getArticleList(params).then(res => {
                    let data = res.data.data
                    if (data.length > 0) {
                        data.forEach(item => {
                            this.articleList.push(item)
                        })
                        this.page.currentPage = currentPage
                    }
                })
            },
            ifCanLoading () {
                let time = Date.now()
                if (time - this.timmer > 60) {
                    let scrollTop = document.documentElement.scrollTop
                    let clientHeight = document.documentElement.clientHeight
                    let documentHeight = document.documentElement.scrollHeight
                    if (documentHeight - scrollTop - clientHeight < 200) {
                        this.loadArticle(this.page.currentPage + 1)
                    }
                    this.timmer = time
                }
            },
            LoadingNewArticle () {

            }
        },
        components: {
            SideCard,
            SideOther,
            Article
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.ifCanLoading)
        }
    }
</script>

<style scoped lang="less">
  #blog {
    display: flex;
    width: 100%;
    padding-top: 10px;

    .blog-content {
      flex: 1;
      margin: 0 auto;
    }

    .blog-side {
      /*position: fixed;*/
      /*top: 80px;*/
      /*right: 5%;*/
      width: 300px;
      height: 1000px;
    }
  }
</style>
