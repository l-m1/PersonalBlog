<template>
  <div>
    <el-card>
      <!-- 搜素与添加区域 -->
      <el-row :gutter="20">
        <el-col>
          <div class="addbtn">
            <el-button type="primary" @click="addArticle">添加文章</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <!-- 添加文章的对话框 -->
    <el-dialog
      title="添加文章"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDialogClosed">
      <!-- 内容区域 -->
      <el-form ref="addContentRef" :model="addContent" label-width="80px">
        <el-form-item label="标题" prop="title">
          <el-input v-model="addContent.title"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-select v-model="addContent.type" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.label"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="描述" prop="des">
          <div class="describe">
            <textarea
             name="text" 
             class="content" 
             rows="20" cols="80"
             wrap="physical" 
             v-model="addContent.des"></textarea>
            </div>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
    
    
  </div>
</template>
<script>
//网络请求
import {personalArticle,getAllArticle,createArticles,oneArticle,updateArticles,deleteArticles} from 'server/userApi.js'
//工具类
import Storage from 'utils/storage.js';

export default {
  name: 'AllArticles',
  created() {
    this.getAllArticles()
  },
  data() {
    return {
      articlelist: [],
      /* 全部文章 */
      type : "html",
      /* 新建文章内容 */
      addContent: {
        title: '',
        type: '',
        des: ''
      },
      options: [{
          label: 'html'
        }, {
          label: 'css'
        }, {
          label: 'js'
        }, {
          label: 'react'
        }, {
          label: 'vuejs'
        }, {
          label: 'java'
        }, {
          label: 'mysql'
        }, {
          label: 'suanfa'
        }, {
          label: 'database'
        }, {
          label: 'git'
        }, {
          label: 'peopele'
        }, {
          label: 'mianshi'
        },{
          label: '其它'
        }, {
          label: '书籍'
        }],
      value: '',
    }
  },
  methods: {
    /* 添加文章对话框返回清空 */
    addDialogClosed() {
      this.$refs.addContentRef.resetFields()
    },
    /* 添加文章 确定成功添加 */
    submit() {
      this.createArticle()
    },


    //网络请求方法
    /* 全部文章列表 */
    async getAllArticles() {
      let res = await getAllArticle({params:{type:this.type}})
      //console.log(res);
      this.articlelist = res
      this.total = res.length
    },
    /* 添加文章 */
    async createArticle() {
      let res = await createArticles({data:{title:this.addContent.title,type:this.addContent.type,des:this.addContent.des}})
      //this.currentIndex = res.data
      //console.log(res);
      if(res.data === '参数错误!') return this.$message.error('添加文章失败')
      /* 关闭对话框 */
      this.addDialogVisible = false
      /* 刷新列表数据 */
      this.getAllArticles()
      /* 提示信息 */
      return this.$message.success('添加文章成功')
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
  .describe {
    overflow: hidden;
  }
  .content {
    border: 1px solid #DCDFE6;
  }
  .content:focus {
    outline: none !important;
    border-color: #409EFF;
    box-shadow: 0 0 10px #409EFF;
  }
</style>