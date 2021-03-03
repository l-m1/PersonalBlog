<template>
  <div class="content">
    <h2>{{msg}}</h2><br>
    <p>
      This is a very easy to use personal technology blog site.We can post whatever we want<br>
      enter into the
      <a href="http://localhost:8080/read" target="_self" rel="noopener">Personal blog</a>.
    </p>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to My Blog App !'
    }
  }
}
</script>
<style scoped>
  a {
    color: #409EFF;
  }
</style>