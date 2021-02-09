<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/detail' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人文章</el-breadcrumb-item>
      <el-breadcrumb-item>文章列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 搜素与添加区域 -->
      <el-row :gutter="20">
        <el-col>
          <div class="search">
            <el-input placeholder="请输入" v-model="query">
              <el-button slot="append"
              icon="el-icon-search" @click="getPersonalArticle"></el-button>
            </el-input>
          </div>
          <div class="addbtn">
            <el-button type="primary">添加文章</el-button>
          </div>
        </el-col>
      </el-row>
      <!-- 列表区域 -->
      <el-table :data="articlelist" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="create_at" label="创建时间"></el-table-column>
        <el-table-column prop="updata_at" label="更新时间"></el-table-column>
        <el-table-column label="操作">
          <template>
            <!-- 查看按钮 -->
            <el-tooltip effect="dark" content="查看" placement="top" :enterabl="false">
              <el-button type="info" icon="iconfont iconchakan"></el-button>
            </el-tooltip>
            <!-- 编辑按钮 -->
            <el-tooltip effect="dark" content="编辑" placement="top" :enterabl="false">
              <el-button type="primary" icon="iconfont iconbianji"></el-button>
            </el-tooltip>
            <!-- 分配角色按钮 -->
            <el-tooltip effect="dark" content="删除" placement="top" :enterabl="false">
              <el-button type="danger" icon="iconfont iconshanchu"></el-button>
            </el-tooltip>
            </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination layout="total" :total="total"></el-pagination>
    </el-card>
  </div>
</template>
<script>
import {personalArticle,createArticles} from 'server/userApi.js'

export default {
  name: 'PersonalArticle',
  created() {
    this.getPersonalArticle()
  },
  data() {
    return {
      /* 搜索参数 */
      query: '',
      /* 新建文章内容 */
      content: {
        title: '',
        des: '',
        type: ''
      },
      articlelist: [],
      total: 0
    }
  },
  methods: {
    async getPersonalArticle() {
      let res = await personalArticle({data: {}})
      //console.log(res);
      if(res.status !== 200) return this.$message.error('数据获取失败');
      this.articlelist = res.data
      this.total = res.data.length
    },
  }
}
</script>
<style scoped>
  @import url('~assets/css/global.css');
  .el-row {
    display: flex;
  }
  .el-row .search {
    float: left;
    margin-right: 15px;
  }
</style>