<template>
  <div class="login_wrap">
    <el-form label-position="top" label-width="80px" :model="formdata" class="login_form">
        <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
       <el-button type="primary" class="login_btn" @click="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
data(){
    return{
        formdata:{
            username:'',
            password:''
        }
    }
},
methods:{
    //登录请求--使用async+await让异步操作的代码看起来像同步 EC7语法
  async handleLogin(){
      const res = await this.$http.post('login',this.formdata)
      console.log(res)
      const{
          data,meta:{msg,status}
      } = res.data
      if(status===200){
          localStorage.setItem('token',data.token)
          this.$router.push({name :'home'})
          this.$message.success(msg)
      }else{
          this.$message.warning(msg)
      }
   }
}
}
    
    // handleLogin(){
    //     this.$http.post('login',this.formdata)
    //     .then((res)=>{
    //         console.log(res)
    //         const{
    //             data,meta:{msg,status}
    //         }=res.data
    //         if(status===200){
    //             this.$message.success(msg);
    //         }else{
    //             this.$message.error(msg);
    //         }
    //     })
    // }
    // }
    // }

</script>

<style>
.login_wrap{
    background-color: #324152;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login_wrap .login_form{
    width: 400px;
    background-color: #fff;
    padding: 30px;

}
 .login_wrap .login_btn{
    width: 100%;
}

</style>

