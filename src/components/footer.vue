<template>
	<div id="footer">
	   <router-link :to="{name:'index'}">
	   		<img src="../assets/news1.png" v-show="route!=='/index/0'"/>
	   		<img src="../assets/news2.png" v-show="route==='/index/0'"/>
	   		<p :class="{'action': route=='/index/0'}">新闻</p>
	   </router-link>
	   <router-link :to="{name:'live'}">
	   		<img src="../assets/live1.png" v-show="route!=='/live'"/>
	   		<img src="../assets/live2.png" v-show="route==='/live'"/>
	   		<p :class="{'action': route=='/live'}">直播</p>
	   </router-link>
	   <router-link :to="{name:'topic'}">
	   		<img src="../assets/topic1.png" v-show="route!=='/topic'"/>
	   		<img src="../assets/topic2.png" v-show="route==='/topic'"/>
	   		<p :class="{'action': route=='/topic'}">话题</p>
	   </router-link>
	   <router-link :to="{name:'my'}">
	   		<img src="../assets/my1.png" v-show="route!=='/my'"/>
	   		<img src="../assets/my2.png" v-show="route==='/my'"/>
	   		<p :class="{'action': route=='/my'}">我</p>
	   </router-link>
  	</div>
</template>
<script type="text/javascript">
	export default {
	    data(){
	       return {
	       	
	       } 
	    },	    
	    computed:{
	    	route(){
	    		return this.$route.path
	    	}
	    }
	}
</script>
<style type="text/css" scoped="scoped">	
	#footer{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 1.2rem;
		display: flex;
		justify-content: space-around;
		background: #fff;		
	}
	#footer a{
		width: 0.6rem;
		height: 0.6rem;
		text-align: center;
		text-decoration: none;
		color: #999;
		margin-top: 0.2rem;
	}
	#footer a img{
		width: 0.4rem;
		height: 0.4rem;
		display: block;
		margin:0.1rem  auto;				
	}
	#footer a p{
		font-size:0.3rem ;
	}
	
	.action{
		color: #ea413c;
	}
</style>
