<template>
	<div id="navlist">
		<router-view></router-view>	
		<v-header></v-header>
		<v-navbar></v-navbar>		
		<v-banner></v-banner>
		<v-list></v-list>		
	</div>
</template>
<script type="text/javascript">	
	import Header from "./header.vue";
	import Navbar from "./navbar.vue";
	import Banner from "./banner.vue";
	import List from "./list.vue";
	export default {
		data(){
			return{
				
			}
		},
//		props:["ind"],
		components:{
			"v-header":Header,
			"v-navbar":Navbar,
			"v-banner":Banner,
			"v-list":List			
		}
	}
</script>
<style type="text/css">
	
</style>