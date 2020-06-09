<template>
  <div id="header-top" class="hidden-md-and-up">
    <div class="header-top-wrapper flex">
      <div class="header-logo"></div>
      <div class="header-nav-content flex flex-1">
        <ul class="header-nav-list" :class="'ul-active' + indexNav">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/blog">博客</router-link></li>
          <li><router-link to="/about">关于</router-link></li>
        </ul>
        <div class="nav-content-right">
          <el-button plain @click="openRegisterForm">注册</el-button>
          <el-button plain @click="openLoginForm">登录</el-button>
        </div>
      </div>
    </div>
    <login-from :loginFormVisible = loginFormVisible @closeLoginForm = "closeLoginForm"></login-from>
    <register-from :registerFormVisible = registerFormVisible @closeRegisterForm = "closeRegisterForm"></register-from>
  </div>
</template>

<script>
    import LoginFrom from 'components/common/Login';
    import RegisterFrom from 'components/common/Register';
    export default {
        name: "HeaderMin",
        data() {
            return {
                activeIndex: '1',
                loginFormVisible: false,
                registerFormVisible: false,
                routerList: ['/', '/blog', '/about'],
            };
        },
        methods: {
            openLoginForm() {
                this.loginFormVisible = true
            },
            openRegisterForm() {
                this.registerFormVisible = true
            },
            closeLoginForm() {
                this.loginFormVisible = false;
            },
            closeRegisterForm() {
                this.registerFormVisible = false;
            }
        },
        computed: {
            indexNav() {
                let index = this.routerList.indexOf(this.$route.path);
                return index+1;
            }
        },
        components: {
            LoginFrom,
            RegisterFrom
        }
    }
</script>

<style lang="less" scoped>
  #header-top {
    margin-top: @header-height + 10px;
    .header-top-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      min-width: 510px;
      width: 100%;
      background: @bg-color;
      z-index: 99;
      .header-logo {
        display: inline-block;
        width: @header-height;
        height: @header-height;
        margin-left: 30px;
        background: #ccc;
        border-radius: 50%;
        background: url("~assets/img/logo.jpg") no-repeat center/cover;
      }
      .header-nav-content {
        justify-content: space-between;
        .header-nav-list {
          display: flex;
          justify-content: center;
          margin-left: 30px;
          li {
            position: relative;
            flex: 1;
            width: 55px;
            height: @header-height;
            line-height: @header-height;
            transition: color .4s;
            cursor: pointer;
            text-align: center;
            &:after {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              margin: 0 auto;
              width: 0;
              height: 2px;
              content: "";
              transition: width .4s;
              background: @main-color;
            }
            &:hover {
              color: @main-color;
              &:after {
                width: 100%;
              }
            }
          }
        }

        /*点击*/
        .ul-active1 li:nth-child(1), .ul-active2 li:nth-child(2), .ul-active3 li:nth-child(3) {
          color: @main-color;
          &:after {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin: 0 auto;
            content: "";
            width: 100%;
            height: 2px;
            background: @main-color;
          }
        }

        .nav-content-list {
          display: inline-block;
          flex: 1;
          width: 100%;
          float: left;
          list-style: none;
        }

        .nav-content-right {
          display: inline-block;
          padding: 0 10px;
          margin-right: 30px;
          height: @header-height;
          line-height: @header-height;
          min-width: 150px;
          width: 150px;
          float: right;
        }
      }
    }
  }
  .from-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  }
</style>
