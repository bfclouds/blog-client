<template>
<!--  <el-row :gutter="4">-->
<!--    <el-col :md="4" :lg="8" :xs="1" :sm="1" >-->
<!--      <header-side></header-side>-->
<!--    </el-col>-->
<!--    <el-col :xs="23" :sm="23" :md="20" :lg="16">-->
<!--      <div class="flex flex-column ">-->
<!--        <div class="flex-1">-->
<!--          <header-top></header-top>-->
<!--        </div>-->
<!--        <div class="flex-1 content-wrapper">-->
<!--          content-->
<!--          &lt;!&ndash;        <router-view></router-view>&ndash;&gt;-->
<!--        </div>-->
<!--      </div>-->
<!--    </el-col>-->
<!--  </el-row>-->
  <div class="main-wrapper hearder-side-cloumn">
    <div class="header-side">
      <header-side></header-side>
    </div>
    <div class="content_right">
      <div class="flex">
        <div class="flex-1">
          <header-top></header-top>
        </div>
        <div class="flex-1 content-wrapper">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderSide from "../components/common/HeaderSide";
  import HeaderTop from "../components/common/HeaderTop";
  export default {
      name: "index",
      components: {
          HeaderSide,
          HeaderTop
      }
  }
</script>

<style scoped lang="less">
  .main-wrapper {
    display: flex;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    .header-side {
      height: 100%;
    }
    .content_right {
      .content-wrapper {
        padding: 5px;
      }
    }
  }
</style>