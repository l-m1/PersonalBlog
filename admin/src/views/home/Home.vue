<template>
  <div class="box">
    <div class="header">
      <header-background :imgSrc='imgSrc' :title='title' :lottery='lottery'></header-background>
    </div>
    <div class="context"> 
      <div class="context_left">
        <div class="context_left_item" v-for="(item,index) in articlelist" :key="index">
          <h2>{{item.title}}</h2>
          <div class="article">
            {{item.des}}
          </div>
          <p class="date">
            {{item.updata_at.slice(0,10)}}
          </p>
          <hr>
        </div>
      </div>
      <div class="context_right">
        <personal-info></personal-info>
      </div>
    </div>
  </div>
</template>
<script>
import headerBackground from "components/content/headerBackground/index.vue";
import personalInfo from "components/content/personalInfo/index.vue";
//网络请求
import {getAllArticle,oneArticle} from 'server/userApi.js'

export default {
  name:'Home',
  created() {
    this.getAllArticles()
  },
  components:{
    headerBackground,
    personalInfo
  },
  data(){
    return{
      imgSrc:require('assets/image/home.jpg'),
      title:'Hi Blog',
      lottery:'你可以很努力 但千万别着急',
      articlelist:{},
      date:'2020-08-10 16:39:15',
      scrollTop:0
    }
  },
  methods: {
    /* 网络请求 */
    //获取对应项文章列表
    async getAllArticles() {
      let res = await getAllArticle({params:{}})
      //console.log(res);
      this.articlelist = res
    },
  }
}
</script>
<style scoped>
  .box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .header{
    /* border: 1px solid red; */
    height: 400px;
    width: 100%;
  }
  .context{
    margin-top: 60px;
    /* border: 1px solid red; */
    width: 1200px;
    display: flex;
    justify-content: center;
  }
  .context_left{
    width: 750px;
  }
  .context_left_item{
    padding: 10px 0px;
    width: 750px;
    height: 165px;
  }
  .context_left_item h2:hover{
    cursor: pointer;
    color: #42b983;
  }
  .context_right{
    width: 220px;
    /* border: 1px solid; */
    margin-left: 50px;
  }
  .article{
    padding: 5px 5px;
    font-size: 14px;
    color: #a3a3a3;
    line-height: 22px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  .article:hover{
    cursor: pointer;
    color: #42b983;
  }
  .date{
    display: block;
    float: right;
    font-size: 12px;
    color: #a3a3a3;
    margin-bottom: 20px;
  }
  .next{
    width: 120px;
    height: 40px;
    border: 1px solid #a3a3a3;
    margin-top: 20px;
    float: right;
    margin-bottom: 50px;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
  }
  .next:hover{
    cursor: pointer;
    background-color:  #42b983;
  }
  .right_tags h5{
    padding: 20px 0px;
    font-weight: bold;
    color: #808080;
  }
  .box_tags{
    width: 220px;
    height: 70px;
    padding:5px 5px;
    /* border: 1px solid; */
    overflow: hidden;
  }
  .featured_tags{
    border: 1px solid #a3a3a3;
    border-radius: 20px;
    font-size: 12px;
    color: #a3a3a3;
    line-height: 14px;
    padding: 5px 5px;
    float: left;
    margin:5px 5px;
  }
  .right_about{
    width: 220px;
    height: 300px;
    /* border: 1px solid; */
  }
  .right_about h5{
    padding: 20px 0px;
    font-weight: bold;
    color: #808080;
  }
  .box_about img{
    width: 80%;
    display: block;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .box_about p{
    color: #bfbfbf;
    font-size: 14px;
  }
  .right_friends h5{
    padding: 20px 0px;
    font-weight: bold;
    color: #808080;
  }
  .right_friends ul li a{
    color: #bfbfbf;
    font-size: 14px;
  }
  ul li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }

</style>