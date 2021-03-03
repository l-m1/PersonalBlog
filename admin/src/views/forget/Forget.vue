<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头部区域 -->
      <div class="avatar_box">
        <span>忘记密码</span>
      </div>
      <!-- 找回密码区域 -->
      <el-form ref="loginform" class="loginform" :model="loginForm" :rules="loginRules">
        <!-- 邮箱号 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont iconyouxiang"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="iconfont iconpass" type="password"></el-input>
        </el-form-item>
        <!-- 邮箱验证码 -->
        <el-form-item prop="emailvcode" class="vcode">
          <el-input v-model="loginForm.emailvcode" prefix-icon="iconfont iconyanzhengma"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="relogin" class="login">找回密码</el-button>
          <div class="bottom">
            <el-button type="info" @click="switchModel(1)">登录</el-button>
            <el-button type="info" @click="switchModel(2)">注册</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
/* 邮箱正则 */
import RegExp from "utils/RegExp.js";

export default {
  name: 'Forget',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        emailvcode: ''
      },
      /* 找回密码规则 */
      loginRules: {
        username: [
          { required: true,message: "请输入邮箱账号",trigger: "blur"}
        ],
        password: [
          { required: true,message: "请输入新密码",trigger: "blur"}
        ],
        emailvcode: [
          { required: true,message: "请输入邮箱验证码",trigger: "blur"}
        ]
      },
    }
  },
  methods: {
    async relogin() {
      //点击登录按钮
      //1、用户名\密码 不符合规范
      if(!RegExp.usernameRight.test(this.loginform.emailcode) | !RegExp.regPassWord.test(this.loginform.password)) {
        this.$message({
          message: '请确认您输入的邮箱、密码是否正确',
          type: 'warning'
        })
        return;
      } else {
          //符合规范的 邮箱与密码对应
          //登录成功 保存登录信息
          //let userInfo = await this.$api.post('login',this.loginform)
          const {data:res} = await this.$api.post('login',this.loginForm);
          if(res.meta.status !== 200) return this.$message.error('登录失败');
          //console.log(res);
          //将token保存
          window.sessionStorage.setItem('token',res.data.token);
          //跳转路由
          this.$router.push('/home');
      }
    },
    //下方按钮选择 跳转至注册 or 忘记密码
    switchModel(event) {
      switch (event) {
        case 1:
          this.$router.push('/login')
          break;
        case 2:
          this.$router.push('/register')
          break;
      }
    },
  }
}
</script>
<style lang="less" scoped>
  .login_container {
    background-color: #f5f7fa;
    height: 100vh;
  }
  .login_box {
    width: 450px;
    height: 350px;
    background-color: #fff;
    border-radius: 3px;
    /* 外部白色盒子居中 */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .avatar_box {
      font-size: 30px;
      font-weight: 550;
      color: #333333;
      text-align: center;
    }
  }
  .login_box .loginform {
    position: absolute;
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  }
  .vcode {
    width: 250px;
  }
  .btns .login{
    width: 100%;
  }
  .btns .bottom {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>