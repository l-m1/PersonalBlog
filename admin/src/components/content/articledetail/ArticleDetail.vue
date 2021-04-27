<template>
	<div class = "article-review">
			<div class = "review-title"><h2>{{ articles.title }}</h2></div>
			<div class = "review-tags">
				<h4>类型：</h4>
				<span>{{ articles.type }}</span> 
			</div>
			<div class = "review-abstract">
				<h4>内容：</h4>
				<span>{{ articles.des }}</span> 
			</div>
			<div class = "review-date">
				<h4>发表时间：</h4>
				<span>{{ articles.updata_at }}</span> 
			</div>
		</div>
</template>
<script>
import {oneArticle} from 'server/homeApi.js'
export default {
  name: "ArticleDetail",
  data() {
    return {
      articles: {}
    };
  },
  created() {
    this.lookArticle();
  },
  methods: {
    async lookArticle() {
      let res = await oneArticle({params: {id: 83,type:"书籍"}})
      this.articles = res
      this.articles.updata_at = res.updata_at.slice(0,10)
      //console.log(res);
    },
  }
};
</script>
<style lang = "less">
	.article-review{
		box-sizing: border-box;
		padding: 20px;
		color: #404040;
		line-height: 1.8;
		width: 80%;
		margin: 20px auto 0;
		box-shadow: 0 0 1px rgba(0,0,0,0.8);
		border-radius: 2px;
	}
	.review-tags{
		h4{
			display: inline-block;
		}
		span{
			margin-right: 10px;
		}
	}
	.review-abstract,.review-content,.review-date{
		margin-top: 10px;
	}
	.review-abstract h4,.review-date h4{
		display: inline-block;
	}
	.review-title{
		margin-top: 10px;
		text-align: center;
	}
	.review-content {
		li{
			margin-left: 15px;
		}
		hr{
			margin: 15px 0;
			height: 0;
			border: 0;
			border-top: 1px solid #ccc;
		}
		img{
			max-width: 100%;
		}
	}
	@media screen and(max-width: 767px){
		.article-review{
			margin-top: 10px;
			padding: 10px;
			width: 100%;
			pre{
				box-sizing: border-box;
			}
		}
	}
</style>