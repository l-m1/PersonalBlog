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
          <el-menu
          default-active="read"
          class="el-menu-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          :collapse="iscollapse"
          :collapse-transition="false"
          router>
          <el-menu-item index="hello">
              <i class="iconfont iconyingyonghuanying"></i>
              <span>欢迎</span>
            </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont iconquanbu"></i>
              <span>首页</span>
            </template>
            <el-submenu index="3">
              <template slot="title">
                <i class="iconfont icon8_3qianduankaifa"></i>
                <span>前端开发</span>
              </template>
              <el-menu-item index="html">HTML</el-menu-item>
              <el-menu-item index="css">CSS</el-menu-item>
              <el-menu-item index="js">Javascript</el-menu-item>
              <el-menu-item index="vuejs">Vue.js</el-menu-item>
              <el-menu-item index="react">React</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="iconfont icon8_4houduankaifa11"></i>
                <span>后端开发</span>
              </template>
              <el-menu-item index="java">JAVA</el-menu-item>
              <el-menu-item index="mysql">MySql</el-menu-item>
              <el-menu-item index="suanfa">算法</el-menu-item>
            </el-submenu> 
            <el-submenu index="5">
              <template slot="title">
                <i class="iconfont iconrengongzhineng"></i>
                <span>人工智能</span>
              </template>
              <el-menu-item index="database">大数据</el-menu-item>
            </el-submenu> 
            <el-submenu index="6">
              <template slot="title">
                <i class="iconfont icongongju"></i>
                <span>开发工具</span>
              </template>
              <el-menu-item index="git">Git</el-menu-item>
              <el-menu-item index="vscode">Visual Studio Code</el-menu-item>
            </el-submenu> 
            <el-submenu index="7">
              <template slot="title">
                <i class="iconfont icondaima"></i>
                <span>代码人生</span>
              </template>
              <el-menu-item index="people">程序员</el-menu-item>
              <el-menu-item index="mianshi">面试法宝</el-menu-item>
            </el-submenu>
            <el-menu-item-group index="people">
              <el-menu-item index="other">
                <i class="iconfont iconqita"></i>
                <span>其它</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item-group>
            <template slot="title">阅读</template>
            <el-menu-item index="read">
              <i class="iconfont iconyuedu"></i>
              <span>书籍</span>
            </el-menu-item>
          </el-menu-item-group>
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

export default {
  name: 'Home',
  data() {
    return {
      /* 菜单折叠效果 */
      iscollapse: false
    }
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
  .el-menu i {
    padding-right: 3px;
  }
  .el-menu span {
    font-size: 12px;
  }
</style>