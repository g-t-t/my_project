<template>
  <el-container class="container">
    <!-- 头顶部 -->
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="../../assets/logo.png" alt>
          </div>
        </el-col>
        <el-col :span="18" class="middle">
          <div class="grid-content bg-purple-light">
            <h3>电商后台管理系统</h3>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <a href="#" class="loginOut" @click="login_Out()">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>

    <!-- 侧边栏 -->
    <el-container>
      <el-aside width="200px">
        <el-menu
          :router="true"
          :unique-opened="true"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              <span>用户列表</span>
            </el-menu-item>
          </el-submenu>

          <!-- 2 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="2-1">
              <i class="el-icon-menu"></i>
              <span>角色列表</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-menu"></i>
              <span>权限列表</span>
            </el-menu-item>
          </el-submenu>

          <!-- 3 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="3-1">
              <i class="el-icon-menu"></i>
              <span>商品列表</span>
            </el-menu-item>
            <el-menu-item index="3-2">
              <i class="el-icon-menu"></i>
              <span>分类参数</span>
            </el-menu-item>
            <el-menu-item index="3-3">
              <i class="el-icon-menu"></i>
              <span>商品分类</span>
            </el-menu-item>
          </el-submenu>
          <!-- 4 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="4-1">
              <i class="el-icon-menu"></i>
              <span>订单列表</span>
            </el-menu-item>
          </el-submenu>
          <!-- 5 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="5-1">
              <i class="el-icon-menu"></i>
              <span>数据报表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
        <!-- 中间 -->
   <el-main class="main">Main</el-main>
</el-container>
  </el-container>
</template>

<script>
export default {
    // 钩子函数 newvue之前自动触发
    beforeCreate(){
        // 获取token
        const token= localStorage.getItem('token')
        if(!token){
            // 如果没有token，先登陆
            this.$router.push({name:'login'})
        }
    },

methods:{
    login_Out(){
        // 清除token
        localStorage.clear()
        this.$message.success('退出成功')
        this.$router.push({name:'login'})
    }
}
}
</script>

<style>
.container{
   height: 100%;
}
/*头顶部
*/
.header{
    background-color: #B3C0D1;
}
.middle{
    text-align: center;
}
.loginOut{
    text-decoration: none;
    line-height: 60px;
}
/*
中间
*/
.main{
    background-color: #E9EEF3;
}
/*侧边栏
*/
.aside{
    background-color: #D3DCE6;
}
</style>
