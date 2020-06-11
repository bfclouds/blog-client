<template>
    <div>
        <div class="test_top">
            google
<!--            <Test1 v-if="ifShow('top', 'test1')"></Test1>-->
            <component v-bind:is="topTabComponent"></component>
        </div>
        <div class="test_bottom">
            <component v-bind:is="bottomTabComponent"></component>
        </div>
      <editer-quill></editer-quill>
    </div>
</template>

<script>
    import Test1 from "../../components/common/test1";
    import Test2 from "../../components/common/test2";
    import Test3 from "../../components/common/test3";
    import EditerQuill from "../../components/common/EditerQuill";

    export default {
        data() {
            return {
                menuview: "hidden-sm-and-down",
                iconview: ["el-icon-s-unfold", "hidden-md-and-up"],
                activeIndex: "1",
                activeIndex2: "1",
                keywords:'',
                positionInfo: [
                    {
                        position: 'top',
                        compute: 'Test3'
                    },
                    {
                        position: 'bottom',
                        compute: 'Test1'
                    }

                ],
                showConputed: {
                    top: '',
                    middle: '',
                    bottom: ''
                }
                // 在mouted时候获取该路由下的配置信息
                // router: '/about',
            };
        },
        mounted() {
            this.handleConputed()
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
            },
            handleConputed () {
                this.positionInfo.reduce((arr, item) => {
                    console.log(arr, item)
                    if (!arr[item.position]) {
                        arr[item.position] = item.compute
                    }
                    return arr
                }, this.showConputed)
            },
            ifShow (position, compute) {
                return this.showConputed[position] && this.showConputed[position] === compute
            }
        },
        computed: {
            topTabComponent () {
                return this.showConputed.top
            },
            bottomTabComponent () {
                return this.showConputed.bottom
            }
        },
        components: {
            Test1,
            Test2,
            Test3,
            EditerQuill
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

    .test_top {
        width: 200px;
        height: 200px;
        background-color: red;
    }
    .test_bottom {
        margin-top: 40px;
        margin-bottom: 40px;
        background-color: red;
    }
</style>