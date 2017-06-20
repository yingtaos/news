<template>
	<div>	
		
		<v-navlist></v-navlist>
		<router-view></router-view>
	</div>	
</template>

<script type="text/javascript">		
	import NavList from "./navlist.vue";
	export default {
		components:{					
			"v-navlist":NavList
		}
	}
</script>

<style type="text/css">
	
</style>