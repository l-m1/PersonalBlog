<template>
    <el-container class="home-container">
      <el-header>
        <!-- 头部 -->
        <div class="header">
          <img src="~assets/img/title.png" alt="">
          <span>个人博客</span>
        </div>
        <el-button type="info" @click="back">退出</el-button>
      </el-header>
      <!-- 主体部分 -->
      <el-container>
        <!-- 左侧 -->
        <el-aside width = "iscollapse ? '64px' : '200px'">
          <!-- 左侧收缩框 -->
          <div class="toggle-button" @click="cliClospe">|||</div>
          <!-- 左侧 菜单项 -->
          <el-menu
            default-active="1"
            class="el-menu-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            unique-opened
            :collapse="iscollapse"
            :collapse-transition="false"
            router>
            <el-menu-item index="1" @click="btnClick01">
              <i class="el-icon-menu"></i>
              <span slot="title">个人文章</span>
            </el-menu-item>
            <el-menu-item index="2" @click="btnClick02">
              <i class="el-icon-menu"></i>
              <span slot="title">新建文章</span>
            </el-menu-item>
            <el-menu-item index="3" @click="btnClick03">
              <i class="el-icon-menu"></i>
              <span slot="title">全部文章</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 右侧主体内容 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>
<script>
import PersonalArticle from './homechildren/PersonalArticle.vue'
import CreateArticle from './homechildren/CreateArticle.vue'
import AllArticles from './homechildren/AllArticles.vue'

export default {
  name: 'Home',
  /* 页面加载时就获取数据 */
  created() {
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  data() {
    return {
      /* 菜单折叠效果 */
      iscollapse: false
    }
  },
  components: {
    PersonalArticle,
    CreateArticle,
    AllArticles
  },
  methods: {
    /* 返回登录页 */
    back() {
      window.sessionStorage.clear('token');
      this.$router.push('/login')
    },
    /* 设置菜单栏折叠 */
    cliClospe() {
      this.iscollapse = ! this.iscollapse;
    },
    /* 跳转菜单路由 */
    btnClick01() {
      this.$router.push('./personalarticle')
    },
    btnClick02() {
      this.$router.push('./createarticle')
    },
    btnClick03() {
      this.$router.push('./allarticles')
    }
  }
}
</script>
<style scoped>
  .home-container {
    height: 100vh;
  }
  .el-header {
    background-color: #424242;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0;
    font-size: 20px;
    color: #fff;
  }
  .el-header .header {
    display: flex;
    align-items: center;
  }
  .el-header .header img {
    margin: 0 10px;
  }
  .toggle-button {
    background-color: #424242;
    color: #fff;
    font-size: 10px;
    line-height: 24px;
    text-align: center;
    /* 竖线之间间距 */
    letter-spacing: 0.2em;
    /* 鼠标点击效果 */
    cursor: pointer;
  }
  .el-aside {
    background-color: #424242;
  }
  .el-aside .el-menu {
    border-right: none;
  }
</style>