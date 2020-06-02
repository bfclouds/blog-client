<template>
    <div>
        <el-row>
            <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="3">
                <h1>
                    <a href>管理系统</a>
                    <i :class="iconview" style="color: #409eff;cursor:pointer;" @click="chanView"></i>
                </h1>
            </el-col>
            <div :class="menuview">
                <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="17">
                    <el-menu
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                    >
                        <el-menu-item index="1">首页</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">我的工作台</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                            <el-submenu index="2-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="2-4-1">选项1</el-menu-item>
                                <el-menu-item index="2-4-2">选项2</el-menu-item>
                                <el-menu-item index="2-4-3">选项3</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="3" disabled>消息中心</el-menu-item>
                        <el-menu-item index="4">
                            <a href="https://www.ele.me" target="_blank">订单管理</a>
                        </el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <el-input placeholder="请输入搜索关键词" suffix-icon="el-icon-search" v-model="keywords"></el-input>
                </el-col>
            </div>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuview: "hidden-sm-and-down",
                iconview: ["el-icon-s-unfold", "hidden-md-and-up"],
                activeIndex: "1",
                activeIndex2: "1",
                keywords:''
            };
        },
        methods: {
            chanView() {
                if (this.menuview !== '') {
                    this.iconview[0] = "el-icon-s-fold";
                    this.menuview = "";
                } else {
                    this.iconview[0] = "el-icon-s-unfold";
                    this.menuview = "hidden-sm-and-down";
                }
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    };
</script>

<style lang="less" scoped>
    h1 {
        margin: 0;
        float: left;
        font-size: 2em;
        font-weight: 400;
        padding: 10px;
        a {
            color: #409eff;
            text-decoration: none;
        }
    }
    .el-menu {
        background: none;
    }
    .el-menu.el-menu--horizontal {
        border-bottom: none;
    }
    .el-input {
        margin: 10px 0;
    }
</style>