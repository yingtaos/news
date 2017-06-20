<template>
	<div id="search">	
		<div class="header">
			<router-link to="/index" class="back">
		    	<span>返回</span>
		  	</router-link>		 
			<p>搜索</p>
		</div>
		<div class="input">
			<img src="../../assets/search2.png"/>			
			<input type="text" placeholder="请输入关键字..."/>
			<img src="../../assets/ercode.png"/>
		</div>
	  	<div class="read">
	  		<h2>阅读历史<span>更多</span></h2>
	  	</div>
	  	<div class="hot">
	  		<p>近期热词</p>			
	  	</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		mounted(){
			$("input").focus()
		}
	}
</script>
<style type="text/css">
	#search{
		background: #f1f1f1;
		height: 100%;
	}
	.header{
		width: 100%;
		height: 1rem;
		background: #ea413c ;
		color: #fff;
		display: flex;
		justify-content:flex-start;
	}
	.back{
		width: 1rem;
		height: 100%;
		line-height: 1rem;
		margin-right: 0.5rem;
		font-size: 0.3rem;
	}
	.header p{
		font-size: 0.5rem;
		line-height: 1rem;
	}
	.input{
		width: 90%;
		height: 0.6rem;
		border: 0.01rem solid #D2D2D2;
		border-radius: 0.1rem;
		background: #fff;
		display: flex;
		justify-content: space-between;
		margin: 0.5rem 0.2rem;		
		padding: 0.1rem ;
	}
	.input img{
		width: 8%;
		height: 0.6rem;
		
	}
	.input input{
		width: 80%;
		border:0;
		outline: medium;
		font-size: 0.4rem;
	}
	.read{
		font-size: 0.5rem;
	}
</style>