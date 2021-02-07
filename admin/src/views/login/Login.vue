<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头部区域 -->
      <div class="avatar_box">
        <span>登录</span>
      </div>
      <!-- 登录区域 -->
      <el-form ref="loginform" class="loginform" :model="loginForm" :rules="loginRules">
        <!-- 邮箱号 -->
        <el-form-item prop="name">
          <el-input v-model="loginForm.name" prefix-icon="iconfont iconyouxiang"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="psd">
          <el-input v-model="loginForm.psd" prefix-icon="iconfont iconpass" type="password"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="submit" class="login">登录</el-button>
          <div class="bottom">
            <el-button type="info" @click="switchModel(1)">注册</el-button>
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
import Storage from "utils/storage.js";
/* 网络请求 */
import {login} from 'server/userApi.js';

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        name: "薛顺顺",
        psd: "123456"
      },
      /* 登录规则 */
      loginRules: {
        name: [
          { required: true,message: "请输入用户名",trigger: "blur"}
        ],
        psd: [
          { required: true,message: "请输入登录密码",trigger: "blur"}
        ]
      },
    }
  },
  methods: {
    async submit() {
        this.$message.success('登陆成功');
        let res = await login({data:{name: "薛顺顺",psd: "123456"}})
        if(res.id === 0) {
          console.log(res);
          //将token保存
          Storage.setStorage('token',res.token);
          //跳转路由
          this.$router.push('/detail');
        }
    },
    //下方按钮选择 跳转至注册 or 忘记密码
    switchModel(event) {
      switch (event) {
        case 1:
          this.$router.push('/register')
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
    height: 360px;
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