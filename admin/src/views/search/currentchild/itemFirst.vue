<template>
  <div>
    <div class="article">
      <div class="title">{{detail.title}}</div>
      <div class="content" v-html="detail.des"></div>
      <el-button @click="back">返回</el-button>
      <div class="date">
        日期: {{detail.updata_at}}
      </div>
    </div>
  </div>
</template>

<script>
import {personalArticle,oneArticle,updateArticles,deleteArticles} from 'server/userApi.js'
export default {
  name: "ArticleDetail",
  data() {
    return {
      detail: {}
    };
  },
  created() {
    this.lookArticle();
  },
  methods: {
    //返回前一张页面
    back() {
      this.$router.push('/search')
    },
    async lookArticle() {
      let res = await oneArticle({params: {id: 62,type:"书籍"}})
      this.detail = res
      this.detail.updata_at = res.updata_at.slice(0,10)
      //console.log(res);
    },
  }
};
</script>

<style scoped>
.article {
  width: 60%;
  padding: 30px 100px;
  min-width: 300px;
  margin: 20px auto;
  background: #eee;
  font-size: 14px;
}
.title {
  font-size: 20px;
  color: cadetblue;
  margin-top: 15px;
}
.date {
  float: right;
  bottom: 0px;
}
.content {
  text-align: left;
  margin: 15px;
  line-height: 30px;
  word-wrap: break-word;
  word-break: normal;
  overflow-x: hidden;
}
.content * {
  max-width: 100%;
}
</style>