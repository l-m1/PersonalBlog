<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头部区域 -->
      <div class="avatar_box">
        <span>注册</span>
      </div>
      <!-- 找回密码区域 -->
      <el-form ref="loginform" class="loginform" :model="loginForm" :rules="loginRules">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont iconyouxiang"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="iconfont iconpass" type="password"></el-input>
        </el-form-item>
        <!-- 邮箱验证码 -->
        <el-form-item prop="vcode" class="vcode">
          <el-input v-model="loginForm.vcode" prefix-icon="iconfont iconyanzhengma"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" class="login">找回密码</el-button>
          <div class="bottom">
            <el-button type="info" @click="switchModel(1)">登录</el-button>
            <el-button type="info" @click="switchModel(2)">忘记密码</el-button>
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
  name: 'Register',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        vcode: ''
      },
      /* 找回密码规则 */
      loginRules: {
        username: [
          { required: true,message: "用户名",trigger: "blur"},
          { min: 6,max: 18,message: "长度在 6 到 18 个字符",trigger: "blur"}
        ],
        password: [
          { required: true,message: "密码",trigger: "blur"},
          { min: 6,max: 12,message: "长度在 6 到 12 个字符",trigger: "blur"}
        ],
        vcode: [
          { required: true,message: "验证码",trigger: "blur"},
          { min: 6,max: 6,message: "长度在 6 个字符",trigger: "blur"}
        ]
      },
    }
  },
  methods: {
    //下方按钮选择 跳转至注册 or 忘记密码
    switchModel(event) {
      switch (event) {
        case 1:
          this.$router.push('/login')
          break;
        case 2:
          this.$router.push('/forget')
          break;
      }
    },
  }
}
</script>
<style lang="less" scoped>
  .login_container {
    background-color: #2b4b6b;
    height: 100vh;
  }
  .login_box {
    width: 450px;
    height: 400px;
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
    bottom: 30px;
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