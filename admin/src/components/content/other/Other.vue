<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>其它</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 内容区 -->
    <el-card class="box-card" v-for="(item,index) in articlelist" :key="index">
      <div slot="header" class="clearfix">
        <span>标题：{{item.title}}</span>
        <el-button style="float: right" type="primary" icon="iconfont iconchakan" size="mini" @click="lookArticle(item.id)"></el-button>
      </div>
      <div class="text item">更新时间：{{item.updata_at}}</div>
    </el-card>
    <!--  查看文章对话框-->
    <el-dialog
      title="查看文章内容"
      :visible.sync="lookDialogVisible"
      width="50%">
      <el-form ref="lookContentRef" :model="article" label-width="80px">
          <div class="describe">
            <textarea
             name="text" 
             class="content" 
             rows="20" cols="90"
             wrap="physical" 
             v-model="article.des"></textarea>
            </div>
      </el-form>
      <span slot="footer">
        <el-button @click="lookDialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
//网络请求
import {getAllArticle,oneArticle,updateArticles} from 'server/userApi.js'

export default {
  name:'Other',
  data() {
    return {
      articlelist:[],
      article: {
      },
      length:0,
      lookDialogVisible:false,
      /* 网络请求都数据 */
      type:'其它',
      id:'',
    }
  },
  created() {
    this.getAllArticles()
  },
  methods: {


    //网络请求方法
    /* 文章列表 */
    async getAllArticles() {
      let res = await getAllArticle({params:{type:this.type}})
      this.articlelist = res
      //console.log(res);
    },
    /* 查看单个文章内容 */
    async lookArticle(id) {
      let res = await oneArticle({params: {id: id,type:this.type}})
      console.log(res);
      this.article = res
      this.lookDialogVisible = true
    }
  }
}
</script>
<style scoped>
  .el-card span{
      font-size: 12px;
    }
  .describe {
    overflow: hidden;
  }
  .content {
    border: 1px solid #DCDFE6;
  }
  .content:focus {
    outline: none !important;
    border-color: #409EFF;
  }
</style>