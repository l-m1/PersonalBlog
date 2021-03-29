<template>
  <div class="box">
    <div class="header">
      <header-background :imgSrc='imgSrc' :title='title' :lottery='lottery'></header-background>
    </div>
    <div class="context">
      <div class="context_box">
        <div class="box_tags">
          <div v-for="(item,key) in navs" :key="key" class="top-navs">
            <a
              href="javascript:;"
              @click="itemClick(subscript=key)"
              :type="subscript === key ?'primary':''"
              style="width:100%"
              :class="{'active':(subscript === key ?'primary':'')}"
            >{{item}}</a>
          </div>
        </div>
        <div class="content">
          <div class="tag-list" v-for="(item,index) in articlelist" :key="index">
            <span id="id" class="tag-text">{{item.title}}</span>
            <ul>
              <li>{{item.des}}</li>
              <hr>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerBackground from "components/content/headerBackground/index.vue";
//网络请求
import {getAllArticle,oneArticle} from 'server/userApi.js'

export default {
  name:'Host',
  created() {
    this.getAllArticles()
  },
  components:{
    headerBackground
  },
  data(){
    let navs =  ["程序员", "javascript", "Vue", "React", "Node","uniapp","闲谈","git","game"];
    return{
      imgSrc:require('assets/image/host.jpg'),
      title:'Articles',
      lottery:'Here are some Articles',
      navs,
      subscript:0, //默认为第一个nav
      type: ['people','js','VueJs','react', "Node","uniapp","people","git","game"],
      articlelist: {},
      isshow: false
    }
  },
  methods: {
    //点击列表
    itemClick() {
      //console.log(this.subscript);
      this.getAllArticles()
    },
    /* 网络请求 */
    //获取对应项文章列表
    async getAllArticles() {
      let res = await getAllArticle({params:{type:this.type[this.subscript]}})
      //console.log(res);
      this.articlelist = res
    },
  }
}
</script>

<style  scoped>
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
    width: 100%;
    display: flex;
    justify-content:center;
    /* align-items:center; */
  }
  .context_box{
    margin-top: 30px;
    width: 750px;
    min-width: 750px;
    /* border: 1px solid; */
    display: flex;
    flex-direction: column;
    justify-items: center;
  }
  .box_tags{
    /* height: 70px; */
    padding:5px 5px;
    /* border: 1px solid yellow;  */
    overflow: hidden;
  }
  .top-navs{
    font-size: 12px;
    color: #fff;
    line-height: 14px;
    padding: 8px 10px;
    float: left;
    margin:5px 5px;
  }
  .content{
    /* border: 1px solid red; */
    flex: 1;
    padding: 10px;
  }
  .content .tag-list{
    margin:20px 0px;
  }
  .content .tag-text{
    color: #0085a1;
    font-weight:200;
    font-size: 20px;
  }
  .content ul li{
    list-style: none;
    padding: 10px;
  }
  .content ul li:hover{
    cursor: pointer;
    color:#0085a1 ;
  }
  .active {
    color: #5ea0c8;
  }
</style>