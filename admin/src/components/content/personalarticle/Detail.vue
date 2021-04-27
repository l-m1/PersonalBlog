<template>
  <div>
    <el-container>
      <el-main>
        <div class="m-blog">
          <p class="m-header-title">{{ blog.title }}</p>
          <el-link icon="el-icon-edit" v-if="ownBlog">
            <template v-if="isshow">
              <router-link
              :to="{ name: 'edit', params: { id: blog.id ,type:blog.type} }"
              >
                编辑
              </router-link>
            </template>
          </el-link>
          <el-tag type="success" class="tag">{{blog.id}}</el-tag>
          <el-divider></el-divider>
          <div class="markdown-body" v-html="blog.des">
          </div>
          <el-button type="primary" size="mini" @click="backFirst" class="back-button"
              >返回</el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {oneArticle} from 'server/personalApi.js'

export default {
  name: "BlogDetail",
  created() {
    const blogId = this.$route.params.id;
    if(blogId) {
      this.isshow = true
      this.lookArticle();
    }
  },
  data() {
    return {
      blog: {
        id: "",
        title: "",
        des: "",
      },
      ownBlog: true,
      isshow:false
    };
  },
  methods: {
    async lookArticle() {
      let res = await oneArticle({params: {id: this.$route.params.id,type:this.$route.params.type}})
      this.blog = res
    },
    //返回
    backFirst() {
      this.$router.push('/first')
    }
  },
};
</script>

<style scoped>
/*文章内容页面样式*/
.m-blog {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 1100px;
  min-height: 600px;
  margin: 0 auto;
  padding: 20px 40px;
}
/*文章标题样式*/
.m-header-title {
  text-align: center;
  font-size: 30px;
  font-family: "Dubai Light";
  padding-top: 25px;
}
.back-button {
  display: block;
  float: right;
}
/*文章内容样式*/
.markdown-body {
  margin-top: 20px;
}
.tag{
  float:right;
  margin-right: 50px;
}
</style>