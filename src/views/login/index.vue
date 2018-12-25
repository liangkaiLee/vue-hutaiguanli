<template>
    <div class="login-container">
        <el-form :model="form" ref="form" class="container" :rules="rules"> 
            <el-form-item>
                <div class="avatar">
                    <img src="../../assets/avatar.jpg" alt="">
                </div>
            </el-form-item>
            <el-form-item prop="username">
                <el-input placeholder="登陆" prefix-icon="myicon myicon-user" v-model="form.username"></el-input>
            </el-form-item>
             <el-form-item prop="password">
                <el-input placeholder="注册" prefix-icon="myicon myicon-key" v-model="form.password" @keyup.enter.native="handleLogin"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="login-btn" @click="handleLogin('form')">登陆</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { login } from '../../api'

    export default {
        data() {
            return {
                form: {
                    username: '',
                    password: '', 
                },
                   
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ],
                },
            }
        },

        methods: {
            handleLogin(formName) {
                // console.log('执行登录操作');
                this.$refs[formName].validate(valid => {
                    // 只有校验通过才执行函数
                    if(valid) {
                        // axios.post('http://127.0.0.1:8888/api/private/v1/login', {
                        //     username: this.username,
                        //     password: this.password,
                        // })
                        login(this.form.username, this.form.password)
                        .then(res => {
                            console.log(res)
                            // console.log(res.data)
                            if(res.data.meta.status === 200) {
                                // 因为加入了导航守卫 所以存储token一定要在路由跳转之前完成
                                // 将token存储在localStorage中
                                localStorage.setItem('token', res.data.data.token);
                                localStorage.setItem('userInfo', JSON.stringify(res.data.data))

                                this.$message({
                                    message: '恭喜你，登陆成功！',
                                    type: 'success',
                                    center: true
                                })
                                this.$router.push('/home')
                                // console.log(res.data.data.token)
                            }else{
                                this.$message({
                                    message: res.data.meta.msg,
                                    type: 'error',
                                    center: true
                                })
                            }
                        })
                    }else {
                        console.log('校验不通过')
                        return false
                    }
                })

            }
        },

    }
</script>

<style lang="scss">
    .login-container {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #2f4050;

        .container {
            position: absolute;
            left: 0;
            right: 0;
            width: 400px;
            padding: 0px 40px 15px 40px;
            margin: 200px auto;
            background: white;
            .avatar {
            position: relative;
            left: 50%;
            width: 120px;
            height: 120px;
            margin-left: -60px;
            margin-top: -60px;
            box-sizing: border-box;
            border-radius: 50%;
            border: 10px solid #fff;
            box-shadow: 0 1px 5px #ccc;
            overflow: hidden;
            }
            .login-btn {
            width: 100%;
            }
        }
    }
</style>
