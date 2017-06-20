<template>
	<div id="list">	
		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"  ref="loadmore">
		  <div class="list">
		    <router-link :to="{name:'detail'}" v-for="(val,index) in count" @click.native="detailData(index)">
		    	<div>
		    		<img :src="val.picUrl"/>		    
		    	</div>		    	    	
				<p>{{val.title}}</p>
		    </router-link>
		  </div>
		  <div class="bottom">
		  	
		  </div>
		</mt-loadmore>	
	</div>
</template>
<script type="text/javascript">
	import store from "../../store/store.js"
	import { Loadmore } from 'mint-ui';
	import Vue from 'vue'
	Vue.component(Loadmore.name, Loadmore);
	export default{
		data(){
			return{
				
			}
		},
		computed : {			
			count(){
				var count=store.state.count;
				return count
			}
		},
		methods:{
			loadTop() {
			  // 加载更多数据
			  this.$refs.loadmore.onTopLoaded();
			},
			loadBottom() {
			  // 加载更多数据
			  this.allLoaded = true;// 若数据已全部获取完毕
			  this.$refs.loadmore.onBottomLoaded();
			},
			detailData(i){
				console.log(1)
				var detail=this.count[i].url
				
				store.commit("upDetailData",detail)
			}
		},
		mounted(){				
			const url = "https://api.tianapi.com/guonei/?key=dab927e632eddd31a7f8d7450526d456&num=10";
			axios.get(url,{jsonp:"callback"})
				.then(res=>{
					var res=res.data.newslist 
					store.commit("mountedData",res)				
				})
				.catch(err=>{
					console.log( err )
				})	
					
		}				
	}
	
</script>
<style type="text/css" scoped="scoped">	
	
	a{
		display: flex;
		justify-content: flex-start;
		height: 1.5rem;
		margin: 0.1rem;
		width: 100%;
		text-decoration: none;
	}
	a img{
		width:1.2rem;
		height: 1.2rem;
		display: block;
		margin-right: 0.1rem;
	}
	a p{
		font-size: 0.35rem;
		color: #999;
	}	
	.bottom{
		width: 100%;
		height: 1.2rem;
	}	
</style>