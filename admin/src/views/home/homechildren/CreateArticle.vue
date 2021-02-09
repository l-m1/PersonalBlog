<template>
  <div>sdgdhsb</div>
</template>
<script>
import {createArticles} from 'server/userApi.js'

export default {
  name: 'CreateArticle',
  created() {
    this.createArticle()
  },
  data() {
    return {
      content: {
        title: '',
        des: '',
        type: ''
      }
    }
  },
  methods: {
    async createArticle() {
      let res = await createArticles({data: {title:this.content.title,des:this.content.des,type:this.content.type}});
      console.log(res);
    }
  }
}
</script>
<style scoped>

</style>