<template>
  <div class="outer">
      <div class="container">
      </div>
      <hello-world></hello-world>
  </div>
</template>
<script>
import HelloWorld from './children/HelloWorld.vue'
export default {
  name:'Hello',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
  .outer {
    /* 水平垂直居中 */
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('~assets/img/hello.jpg') no-repeat;
    width: 100vw;
    height: 100vh;
  }
   .container{
    text-align: center;
   }
</style>