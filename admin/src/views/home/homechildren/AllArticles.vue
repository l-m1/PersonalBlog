<template>
  <div>
    <el-row>
      <el-col :span="8" v-for="(item,index) in length" :key="index" class="activity-box">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <div class="contanier">
            <img src="~assets/img/book.jpg" class="image">
            <div>
              <p><span>标题：{{Article.title}}</span></p>
              <p><span>描述：{{Article.des}}</span></p>
            </div>
          </div>
          <div style="padding: 10px;">
            <div class="bottom clearfix">
              <time class="time"><span>{{updata_at}}</span></time>
              <el-button type="danger" icon="el-icon-delete" size="mini" class="button" @click="deleteItem(currentindex)"></el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {getAllArticle,deleteArticles} from 'server/userApi.js';
import Storage from 'utils/storage.js';
export default {
  created() {
    this.getArticles()
  },
  name: 'AllArticles',
  data() {
    return {
        Article: {
          title: '',
          des: ''
        },
        updata_at:'',
        length:0,
        is_hidden:false,
        currentindex: ''
    }
  },
  methods: {
    async getArticles() {
        let res = await getAllArticle({params:{}})
        this.length = res.data.length
        //console.log(res);
        for(var i=0;i<this.length;i++) {
          this.Article.title = res.data[i].title
          this.Article.des = res.data[i].des
          this.updata_at = res.data[i].updata_at
        }
    },
    async deleteItem(currentindex) {
      let res = await deleteArticles({data: {id:""}})
      //console.log(res);
      for(var i=0;i<res.data.length;i++) {
        this.currentindex = res.data[i].id
      }
      console.log(this.currentindex);
      Storage.removeStorage(currentindex);
      this.getArticles()
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
    width: 350px;
    padding: 10px;
    border-radius: 5px;
    margin: 5px; 
    float: left;
  }
  .contanier {
    display: flex;
    font-size: 12px;
  }
  .el-card .image {
    width: 40%;
    height: 40%;
    margin-right: 3px;
  }
  .clearfix:before,.clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
      clear: both
  }
  .button {
    float: right;
  }
</style>