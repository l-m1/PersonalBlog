<template>
  <div>
    <el-row>
      <el-col :span="8" v-for="(item,index) in articlelist" :key="index" class="activity-box">
        <el-card :body-style="{ padding: '0px' }">
          <img src="~assets/img/book.jpg" class="image">
          <div style="padding: 14px;">
            <span>标题：{{item.title}}</span>
            <div class="bottom clearfix">
              <time class="time">{{item.updata_at}}</time>
              <el-button type="text" class="button" @click="lookarticle(item.id)">查看</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
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
import {getAllArticle,oneArticle} from 'server/userApi.js';
export default {
  created() {
    this.getArticles()
  },
  name: 'Read',
  data() {
    return {
        articlelist: {},
        article: {},
        currentIndex: '',
        lookDialogVisible:false,
        /* 网络请求都数据 */
        type:'书籍',
    }
  },
  methods: {
    /* 网络请求数据的方法 */
    //全部文章
    async getArticles() {
      let res = await getAllArticle({params:{type:this.type}})
      this.articlelist = res
      //console.log(res);
    },
    /* 查看单个文章内容 */
    async lookarticle(id) {
      let res = await oneArticle({params: {id: id,type:this.type}})
      console.log(res);
      this.article = res
      this.lookDialogVisible = true
    }
  }
}
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 10px;
    line-height: 10px;
  }
  .activity-box{
    width: 300px;
    padding: 10px;
    border-radius: 5px;
    margin: 5px; 
    float: left;
  }
  .contanier {
    display: flex;
    font-size: 12px;
  }
  .image {
    width: 100%;
    display: block;
  }
  .clearfix:after {
    clear: both
  }
  .button {
    padding: 0;
    float: right;
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