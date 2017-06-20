<template>
	<div id="nav">
		<div class="nav-block">
			<div id="wrapper" class="swiper-container swiper-container-horizontal" v-if="onOff">
				
		        <div class="navArr swiper-wrapper">
		            <div class="action" v-for="(itme,index) in arr1">
						<router-link :to="{name:'tab',params:{aid:index}}" @click.native="getroute">
							{{itme.title}}							
						</router-link>
					</div>
		        </div>			        
			    
			</div>				
			<div class="tab" v-if="!onOff">
				切换栏目
			</div>
			<div class="img" @click="action">
				<transition name="fade">
					<img src="../../assets/open.png" v-if="onOff"/>						
				</transition>
				<transition name="fade2">
					<img src="../../assets/packup.png" v-if="!onOff"/>						
				</transition>
			</div>
		</div>
		<div class="adjust">
			<div class="arr1">
				<router-link to="/index" v-for="(val,ind) in arr1">{{val.title}}</router-link>
			</div>
			<div class="arr2">
				<p>点击添加更多栏目</p>
				<span v-for="(itme,ind) in arr2" @click="getdata(ind)">
					{{itme.title}}
				</span>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import store from "../../store/store.js";
	export default{
		data(){
			return{
				onOff:true,
				arr1:[
						{title:"国内",code:"guonei"},
						{title:"国际",code:"world"},
						{title:"社会",code:"social"},
						{title:"体育",code:"tiyu"},
						{title:"娱乐",code:"huabian"},
						{title:"科技",code:"keji"},
						{title:"旅游",code:"travel"},
						{title:"健康",code:"health"}
					],
				arr2:[
						{title:"NBA",code:"nba"},
						{title:"足球",code:"football"},
						{title:"VR科技",code:"vr"},
						{title:"IT资讯",code:"it"},
						{title:"移动互联",code:"mobile"},
						{title:"创业",code:"startup"},
						{title:"军事",code:"military"},
						{title:"奇闻异事",code:"qiwen"}
					]
			}
		},		
		methods:{
			action(){
				if(this.onOff==true){
					this.onOff=false
					$(".adjust").css("height","77%")
				}else{
					this.onOff=true
					$(".adjust").css("height","0")
				}
			},
			getdata:function(i){
				var arr1=this.arr1;
				var arr2=this.arr2;				
				if(arr1.indexOf(arr2[i])==-1){
					arr1.push(arr2[i])
//					$(".action").css("width","20rem")
				}												
			},
			getroute(){				
				var aid=this.$route.params.aid
				var code=this.arr1[aid].code
				const url = "https://api.tianapi.com/"+code+"/?key=dab927e632eddd31a7f8d7450526d456&num=10";
				axios.get(url,{jsonp:"callback"})
					.then(res=>{
						var newslist=res.data.newslist
//						console.log(res.data.newslist)
						store.commit("listData",newslist)
					})
					.catch(err=>{
						console.log( err )
					})						
			}
		},
		created(){			
		    var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        slidesPerView: 3,
		        paginationClickable: true,
		        spaceBetween: 30
		    });    
//		    myScroll = new IScroll("#wrapper");
		}
		
	}
</script>

<style type="text/css" scoped="scoped">
	#nav a{
		text-decoration: none;
		color:#aaa;
		font-size: 0.4rem;
	}
	.nav-block{
		width: 100%;
		overflow: hidden;
		height:0.8rem;
		position: relative;
	}
	#wrapper{
		width: 80%;
		float: left;
		height: 100%;
		overflow-x: scroll;			
		position: relative;		
	}
	::-webkit-scrollbar{width:0px}
	.navArr{
		position: absolute;
		display: flex;
		justify-content: space-between;
		width: 10rem;
		height: 0.8rem;	
	}
	.action{
		height: 0.8rem;			
		margin: 0 0.1rem;
		overflow: hidden;
	}
	.action a{
		line-height: 0.8rem;	
		height: 0.8rem;			
		float: left;						
	}
	
	.tab{
		width: 80%;
		font-size: 0.5rem;
		height: 100%;
		
		float: left;
	}
	.img{
		width: 0.8rem;
		height: 100%;		
		margin-left: -0.2rem;
		position: relative;
		float: right;
	}
	.img img{
		width: 0.5rem;
		height: 0.5rem;
		position: absolute;
		left: 0.2rem;
		top:0.1rem;
		transform:rotate(0deg)
	}
	.adjust{
		width: 100%;
		height:0;
		overflow: hidden;
		position: absolute;
		top: 1.8rem;
		background: #fff;
		z-index: 1;
	}
	.adjust a{
		margin: 0.15rem;
	}
	.adjust div span{
		font-size: 0.4rem;
		color: #999;
	}
	.adjust div{
		padding: 0.2rem;
		
	}	
	.arr2 p{
		font-size: 0.4rem;
	}
	/*动画
	.fade-enter-active{
		animation: fade-enter 500ms;
	}
	
	.fade-leave-active{
		animation: fade-leave 500ms;
	}
	@keyframes fade-enter{
		from{
			transform: rotate(180deg);
		}
		to{
			transform: rotate(0deg);
		}
	}
	@keyframes fade-leave{
		from{
			transform: rotate(0);
		}
		to{
			transform: rotate(180deg);
		}
	}
	.fade2-enter-active{
		animation: fade-enter 500ms;
	}
	
	.fade2-leave-active{
		animation: fade-leave 500ms;
	}
	@keyframes fade2-enter{
		from{
			transform: rotate(0);
		}
		to{
			transform: rotate(180deg);
		}
	}
	@keyframes fade2-leave{
		from{
			transform: rotate(180deg);
		}
		to{
			transform: rotate(0);
		}
	}*/
</style>