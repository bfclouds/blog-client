<template>
    <div id="blog">
        <div class="blog-content">
            <Article
                    v-for="item of article"
                    :article="item"
                    :key="item.id"
                    @clickGood="changeGoodState"
            ></Article>
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
import Vue from "vue";

export default {
  name: "index",
  data() {
    return {
      article: [],
    }
  },
    mounted() {
      this.getArticleList()
    },
    methods: {
    changeGoodState(newArticle) {
      this.$set(this.article, newArticle.id - 1, newArticle);
    },
    getArticleList () {
        request.getArticleList().then(res => {
          this.article = Vue.observable(res.data.data);
        })
    }
  },
  components: {
    SideCard,
    SideOther,
    Article
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
