<template>
  <div class="card-article">
    <div v-if="isTop" class="yuanchuang-icon">
      置顶
    </div>
    <div class="card-article-header">
      <div class="article-header-title">
        <span class="header-title-tag">【{{article.type}}】</span>{{article.title}}
      </div>
      <div class="article-header-date">
        <p class="article-date-data">{{date.date}}</p>
        <span class="article-date-month">{{date.month}}</span>
        <span class="article-date-year">{{date.year}}</span>
      </div>
    </div>
    <div class="card-article-content">
      <div class="article-content-img">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=983728995,1218849452&fm=15&gp=0.jpg"
             alt="图片">
      </div>
      <p class="article-content">
        {{article.content}}
      </p>
    </div>
    <div class="card-article-other">
      <span class="article-other-read">继续阅读</span>
      <div class="article-other-line clear-float"></div>
      <div class="other-tag-wrapper">
        <div class="other-tag">
          <i class="iconfont icon-biaoqian"></i>
          <span class="other-tag-name">{{newArticle.tag}}</span>
        </div>
        <div class="article-good">
          <i v-if="this.newArticle.isGood ? true : false" class="iconfont icon-dianzan" style="color: red"
             @click="clickGoodBtn"
          ></i>
          <i v-else class="iconfont icon-dianzan"
             @click="clickGoodBtn"
          ></i>
          <span class="article-icon-text">{{newArticle.goodCount}}</span>
        </div>
        <div class="article-eye">
          <i class="iconfont icon-yanjing"></i>
          <span class="article-icon-text">{{newArticle.eyeCount}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Article",
        data() {
            return {
                tagList: ['原创', '转载'],
                date: {
                    date: Number,
                    month: Number,
                    year: Number,
                },
                newArticle: this.article,
                timer: 0
            }
        },
        props: {
            article: Object
        },
        methods: {
            clickGoodBtn() {
                let newTimer = Date.now()
                if (newTimer - this.timer > 400) {
                    //发起请求改变是否点赞状态，cookie获取当前登录用户信息，文章信息artcile.id
                    // todo
                    // 修改
                    this.newArticle.isGood = !this.newArticle.isGood;
                    this.$emit('clickGood', this.newArticle);
                    this.timer = newTimer;
                }
            }
        },
        computed: {
            isTop() {
                return this.article.id === 1;
            },
            getDate(index) {
                return this.article.data.split('-')[index];
            }
        },
        mounted() {
            this.date.date = this.article.data.split('-')[2];
            this.date.month = this.article.data.split('-')[1];
            this.date.year = this.article.data.split('-')[0];
        }
    }
</script>

<style scoped lang="less">
  @import "~assets/css/common.less";

  .card-article {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    width: 700px;
    margin: 0 auto 20px;
    padding: 0 30px 10px;
    background: bisque;
    background: @bg-color;
    font-size: @content-font-size;
    z-index: 1;

    &:first-child .yuanchuang-icon {
      position: absolute;
      top: 4px;
      left: -18px;
      width: 60px;
      height: 16px;
      line-height: 16px;
      text-align: center;
      font-size: 12px;
      transform: rotate(-45deg);
      background: red;
      color: #fff;
    }

    .card-article-header {
      height: 50px;

      .article-header-title {
        display: inline-block;
        float: left;
        line-height: 40px;

        .header-title-tag {
          color: #81baff;
          font-size: 14px;
        }
      }

      .article-header-date {
        display: inline-block;
        float: right;
        font-size: 13px;
        color: #cccccc;

        .article-date-data {
          margin: 3px 0;
          font-size: 20px;
          font-weight: 600;
          text-align: center;
          color: #72cc81;
        }

        .article-date-month {
          margin: 0 4px;
        }

        .article-date-year {
          margin: 0 4px;

        }
      }

      &::after {
        display: block;
        content: "";
        font-size: 0;
        clear: both;
      }
    }

    .card-article-content {
      display: flex;

      .article-content-img {
        width: 300px;
        height: 200px;
        margin-right: 15px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .article-content {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10;
        overflow: hidden;
        flex: 1;
        line-height: 22px;
        text-indent: 2em;
        text-overflow: ellipsis;
        word-break: break-all;
        color: @content-color;
        cursor: pointer;
      }
    }

    .card-article-other {
      display: flex;
      flex-wrap: wrap;
      margin-top: 15px;

      .article-other-read {
        width: 90px;
        cursor: pointer;
      }

      .article-other-line {
        flex: 1 70%;
        overflow: hidden;
        width: 100%;
        margin-top: 7px;
        font-size: 0;
        height: 0;
        border-bottom: 2px solid #ccc;
        vertical-align: middle;
        text-align: center;
      }

      .other-tag-wrapper {
        //todo 第二行
        width: 100%;
        height: 40px;
        line-height: 40px;

        .other-tag {
          display: inline-block;
          width: 80px;

          .other-tag-name {
            font-size: 14px;
          }
        }

        .article-eye {
          display: inline-block;
          float: right;
          margin: 0 8px;
        }

        .article-good {
          display: inline-block;
          float: right;
        }

        .article-icon-text {
          user-select: none;
        }

        i {
          cursor: pointer;
        }
      }
    }
  }

  /*.card-enter {*/
  /*    !*transition: all .4s;*!*/
  /*    color: #fff;*/
  /*    opacity: 0;*/
  /*    !*transform: scale(0);*!*/
  /*}*/
  /*.card-enter-active {*/
  /*    transition: all .5s;*/
  /*}*/
  /*.card-enter-to {*/
  /*    color: red;*/
  /*    opacity: 1;*/
  /*    !*transform: scale(1);*!*/
  /*}*/
</style>
