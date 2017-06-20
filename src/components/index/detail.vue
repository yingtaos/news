<template>
	<div id="header">
		<mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
		  <router-link to="/" slot="left" @click.native="back">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<p>{{detail}}</p>
	</div>
</template>
<script type="text/javascript">
	import store from "../../store/store.js"
	export default{
		data(){
			return{
				
			}
		},
		computed:{
			detail(){
				var detail=store.state.detail
				return detail
			}
		},
		methods:{
			back(){
//				this.$router.go(-1)
			}
		}
	}
</script>
<style type="text/css" scoped="scoped">
	#header .mint-header{
		background: #ea413c ;
		height: 1.2rem;
		font-size: 0.4rem;
	}
	#header{
		width: 100%;
	}
</style>

