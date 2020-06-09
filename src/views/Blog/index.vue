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
        <div class="blog-side">
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
      article: [
        {
          id: 1,
          title: '仓原图',
          type: '原创',
          data: '2020-04-25',
          img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=983728995,1218849452&fm=15&gp=0.jpg',
          content: '《沧元图》是起点白金大神我吃西红柿继《星峰传说》《寸芒》《星辰变》《盘龙》《九鼎记》《吞噬星空》《莽荒纪》《雪鹰领主》《飞剑问道》之后发表于起点中文网的全新力作。,《沧元图》是起点白金大神我吃西红柿继《星峰传说》《寸芒》《星辰变》《盘龙》《九鼎记》《吞噬星空》《莽荒纪》《雪鹰领主》《飞剑问道》之后发表于起点中文网的全新力作。《沧元图》是起点白金大神我吃西红柿继《星峰传说》《寸芒》《星辰变》《盘龙》《九鼎记》《吞噬星空》《莽荒纪》《雪鹰领主》《飞剑问道》之后发表于起点中文网的全新力作。,《沧元图》是起点白金大神我吃西红柿继《星峰传说》《寸芒》《星辰变》《盘龙》《九鼎记》《吞噬星空》《莽荒纪》《雪鹰领主》《飞剑问道》之后发表于起点中文网的全新力作。',
          tag: '个人日记',
          goodCount: 123,
          eyeCount: 123,
          isGood: true
        },
        {
          id: 2,
          title: '仓原图',
          type: '转载',
          data: '2020-04-25',
          img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=983728995,1218849452&fm=15&gp=0.jpg',
          content: '《沧元图》是起点白金大神我吃西红柿继《星峰传说》《寸芒》《星辰变》《盘龙》《九鼎记》《吞噬星空》《莽荒纪》《雪鹰领主》《飞剑问道》之后发表于起点中文网的全新力作。,《沧元图》是起点白金大神我吃西红柿继《星峰传说》《寸芒》《星辰变》《盘龙》《九鼎记》《吞噬星空》《莽荒纪》《雪鹰领主》《飞剑问道》之后发表于起点中文网的全新力作。《沧元图》是起点白金大神我吃西红柿继《星峰传说》《寸芒》《星辰变》《盘龙》《九鼎记》《吞噬星空》《莽荒纪》《雪鹰领主》《飞剑问道》之后发表于起点中文网的全新力作。,《沧元图》是起点白金大神我吃西红柿继《星峰传说》《寸芒》《星辰变》《盘龙》《九鼎记》《吞噬星空》《莽荒纪》《雪鹰领主》《飞剑问道》之后发表于起点中文网的全新力作。',
          tag: '个人日记',
          goodCount: 123,
          eyeCount: 123,
          isGood: false
        },
        {
          id: 3,
          title: '仓原图',
          type: '转载',
          data: '2020-04-26',
          img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=983728995,1218849452&fm=15&gp=0.jpg',
          content: '《沧元图》是起点白金大神我吃西红柿继《星峰传说》《寸芒》《星辰变》《盘龙》《九鼎记》《吞噬星空》《莽荒纪》《雪鹰领主》《飞剑问道》之后发表于起点中文网的全新力作。,《沧元图》是起点白金大神我吃西红柿继《星峰传说》《寸芒》《星辰变》《盘龙》《九鼎记》《吞噬星空》《莽荒纪》《雪鹰领主》《飞剑问道》之后发表于起点中文网的全新力作。《沧元图》是起点白金大神我吃西红柿继《星峰传说》《寸芒》《星辰变》《盘龙》《九鼎记》《吞噬星空》《莽荒纪》《雪鹰领主》《飞剑问道》之后发表于起点中文网的全新力作。,《沧元图》是起点白金大神我吃西红柿继《星峰传说》《寸芒》《星辰变》《盘龙》《九鼎记》《吞噬星空》《莽荒纪》《雪鹰领主》《飞剑问道》之后发表于起点中文网的全新力作。',
          tag: '个人日记',
          goodCount: 123,
          eyeCount: 123,
          isGood: false
        },
        {
          id: 4,
          title: '老白傻逼',
          type: '原创',
          data: '2020-04-27',
          img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=983728995,1218849452&fm=15&gp=0.jpg',
          content: '《沧元图》是起点白金大神我吃西红柿继《星峰传说》《寸芒》《星辰变》《盘龙》《九鼎记》《吞噬星空》《莽荒纪》《雪鹰领主》《飞剑问道》之后发表于起点中文网的全新力作。,《沧元图》是起点白金大神我吃西红柿继《星峰传说》《寸芒》《星辰变》《盘龙》《九鼎记》《吞噬星空》《莽荒纪》《雪鹰领主》《飞剑问道》之后发表于起点中文网的全新力作。《沧元图》是起点白金大神我吃西红柿继《星峰传说》《寸芒》《星辰变》《盘龙》《九鼎记》《吞噬星空》《莽荒纪》《雪鹰领主》《飞剑问道》之后发表于起点中文网的全新力作。,《沧元图》是起点白金大神我吃西红柿继《星峰传说》《寸芒》《星辰变》《盘龙》《九鼎记》《吞噬星空》《莽荒纪》《雪鹰领主》《飞剑问道》之后发表于起点中文网的全新力作。',
          tag: '个人日记',
          goodCount: 123,
          eyeCount: 123,
          isGood: true
      }],
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
        request.getArticleList({}).then(res => {
            console.log(res)
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
