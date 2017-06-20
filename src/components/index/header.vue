<template>
	<div id="header">
		<img src="../../assets/logo.png"/>
		<router-link :to="{name:'search'}" class="search">
			<img src="../../assets/search.png"/>
		</router-link>
		<router-link :to="{name:'live'}">
			<img src="../../assets/lives.png"/>
		</router-link>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				
			}
		}
	}
</script>
<style type="text/css" scoped="scoped">
	#header{		
		height: 1rem;
		background: #ea413c ;
		display: flex;
		justify-content: space-between;
		padding-top: 0.2rem;
		padding-left: 0.2rem;
		
	}
	img{
		height: 0.6rem;
	}
	a img{
		margin-bottom:0.2rem
	}
	.search{
		width: 0.8rem;
		margin-left: 2.5rem;
	}
</style>