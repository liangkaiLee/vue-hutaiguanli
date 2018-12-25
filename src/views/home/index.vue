<template>
    <div class="home-container">
        <el-container>
            <!-- aside侧边栏部分 -->
            <el-aside width="auto">
            <div class="logo"></div>
            <el-row class="tac">
                <el-col :span="4">
                    <el-menu
                    :default-active="activeIndex"
                    :collapse="isCollapse"
                    class="el-menu-admin"
                    @select="handleSelect"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>用户管理</span>
                            </template>
                            <el-menu-item index="1-1"><i class="el-icon-menu"></i>用户列表</el-menu-item>
                            <el-menu-item index="1-2"><i class="el-icon-menu"></i>用户权限</el-menu-item>
                        </el-submenu>

                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>角色管理</span>
                            </template>
                            <el-menu-item index="2-1"><i class="el-icon-menu"></i>角色列表</el-menu-item>
                            <el-menu-item index="2-2"><i class="el-icon-menu"></i>角色权限</el-menu-item>
                        </el-submenu>

                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>商品管理</span>
                            </template>
                            <el-menu-item index="3-1"><i class="el-icon-menu"></i>商品列表</el-menu-item>
                            <el-menu-item index="3-2"><i class="el-icon-menu"></i>商品</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-col>
            </el-row>
            </el-aside>

            <!-- 右侧展示页部分 -->
            <el-container>
                <!-- header头部部分 -->
                <el-header>
                    <i class="myicon myicon-menu toggle-btn" @click="toggleCollapse"></i>
                    <div class="system-title">电商后台管理系统</div>
                    <span style="margin-left: 400px; color: lawngreen; font-family: '楷体'; font-style: italic; font-weight: bold" >欢迎用户{{ userInfo.username }}登陆</span>
                    <el-button type="warning" size="small" style="margin-right: 20px" @click="loginOut">注销</el-button>
                </el-header>
                <!-- 中间子组件用户信息部分 -->
                <el-main>
                    <el-col :span="20">
                        <!-- <el-button type="warning" style="float: right; margin: 30px" size="mini" @click="loginOut">注销</el-button>
                        <span style="float: right; margin: 30px; color: hotpink; font-family: '楷体'; font-style: italic; font-weight: bold" >
                            欢迎用户{{ userInfo.username }}登陆
                        </span> -->
                        <router-view></router-view>
                    </el-col>
                </el-main>
            </el-container>

        </el-container>
       

        <!-- <el-row class="tac">
            <el-col :span="4">
                <el-menu
                :default-active="activeIndex"
                class="el-menu-vertical-demo"
                @select="handleSelect"
                @open="handleOpen"
                @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-mobile-phone"></i>
                            <span>用户管理</span>
                        </template>
                        <el-menu-item index="1-1">用户列表</el-menu-item>
                        <el-menu-item index="1-2">用户权限</el-menu-item>
                    </el-submenu>

                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-mobile-phone"></i>
                            <span>角色管理</span>
                        </template>
                        <el-menu-item index="2-1">角色列表</el-menu-item>
                        <el-menu-item index="2-2">角色权限</el-menu-item>
                    </el-submenu>

                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-mobile-phone"></i>
                            <span>商品管理</span>
                        </template>
                        <el-menu-item index="3-1">商品列表</el-menu-item>
                        <el-menu-item index="3-2">商品</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>

            <el-col :span="20">
                <el-button type="warning  " style="float: right; margin: 30px" size="mini" @click="loginOut">注销</el-button>
                <span style="float: right; margin: 30px; color: hotpink; font-family: '楷体'; font-style: italic; font-weight: bold" >
                    欢迎用户{{ userInfo.username }}登陆
                </span>
                <router-view></router-view>
            </el-col>
        </el-row> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1-1',
                userInfo: [],
                isCollapse: false
            }
        },

        created() {
            this.userInfo = JSON.parse(localStorage.getItem('userInfo' || '{}'))
        },

        methods: {
            handleSelect(key, keyPath) {
                // console.log(key, keyPath);
                switch (key) {
                    case "1-1": 
                    // 跳转到用户列表页面
                    this.$router.push('/home/users');
                    break;
                }
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            toggleCollapse() {
                this.isCollapse = !this.isCollapse
            },
            loginOut() {
                // 清除token
                localStorage.removeItem('token')
                // 跳转回登录页
                this.$router.push('/login')
                this.$message({
                    type: 'success',
                    message: '恭喜你退出成功!'
                })
            }
        }
    }
</script>

<style lang="less">
    .home-container {
        .el-menu {
            border-right: none;
        }
    }

    .home-container {
        height: 100%;
        background-color: #E5E5E5;
        .el-menu-admin:not(.el-menu--collapse) {
            width: 200px;
            min-height: 400px;
        }
        .el-container {
            height: 100%;
        }
        .el-aside {
            background-color: #545c64;
        }
        .el-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #009688;
        }
        .logo {
            height:60px;
            background: url(../../assets/logo.png);
            background-size: cover;
            background-color: white;
        }
        .toggle-btn {
            padding: 0 10px;
            margin-left: -20px;
            font-size: 36px;
            line-height: 60px;
            color: white;
            cursor: pointer;
            &:hover {
            background-color: #00635a;
            }
        }
        .system-title {
            font-size: 28px;
            color: rgb(90, 228, 55);
            margin-left: 400px;
        }
        // .welcome {
        //     color: lawngreen;
        // }
    }
</style>
