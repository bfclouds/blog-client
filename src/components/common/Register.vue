<template>
    <div>
        <el-dialog title="注册" :visible="registerFormVisible" :width=layoutWidth :showClose=showClose :modal-append-to-body=false>
            <el-form :model="form">
                <el-form-item label="邮箱" :label-width="formLabelWidth">
                    <el-input
                            v-model="form.name"
                            placeholder="请输入您的邮箱"
                            autocomplete="off">
                    </el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input
                            v-model="form.password"
                            placeholder="请输入您的密码"
                            autocomplete="off"
                            type="password"
                    ></el-input>
                </el-form-item>
                <el-form-item label="重复密码" :label-width="formLabelWidth">
                    <el-input
                            v-model="form.password"
                            placeholder="请输入您的密码"
                            autocomplete="off"
                            type="password"
                    ></el-input>
                </el-form-item>
                <el-form-item label="验证码" size="4" :label-width="formLabelWidth">
                    <el-input
                            v-model="form.code"
                            class="login-code"
                            autocomplete="off"
                            placeholder="请输入您的验证码"
                    ></el-input>
                    <el-button type="primary" class="login-code-button" size="small" @click="sendCode"
                               :disabled="code.disableCode"
                               :loading="code.sendState">{{code.disableCode ? code.time + 's后发送' : code.sendState ?
                        '发送中' : '发送验证码'}}
                    </el-button>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="closeForm">取 消</el-button>
                <el-button type="primary" @click="login" :loading=registerState>{{registerState ? '注册中':'注册'}}
                </el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    name: '',
                    password: '',
                    code: '',
                },
                formLabelWidth: '72px',
                layoutWidth: '400px',
                showClose: false,
                registerState: false,
                code: {
                    sendState: false,
                    disableCode: false,
                    time: 10
                }
            }
        },
        methods: {
            closeForm() {
                this.$emit('closeRegisterForm');
            },
            async login() {
                this.registerState = true;
                await setTimeout(() => {
                    this.registerState = false;
                }, 1000);
            },
            async sendCode() {
                this.code.sendState = true;
                await setTimeout(() => {
                    this.code.sendState = false;
                    this.code.disableCode = true;
                }, 1000);

                let timer = setInterval(() => {
                    if (this.code.time > 0) {
                        this.code.time -= 1;
                    } else {
                        clearInterval(timer);
                        this.code.disableCode = false;
                        this.code.time = 10;
                    }
                }, 1000);
            },
            countDown() {
                setInterval(() => {
                    this.code.time -= 1
                }, 1000)
            }
        },
        computed: {},
        props: {
            registerFormVisible: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    .login-code {
        display: inline-block;
        width: 180px;
    }

    .login-code-button {
        display: inline-block;
        margin-left: 12px;
        height: 40px;
    }
</style>
