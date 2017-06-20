<template>
	<div id="app">		
		<router-view></router-view>
		<v-footer></v-footer>
	</div>
 	
</template>

<script>
import Footer from "./components/footer.vue";
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : {
 		"v-footer" : Footer
 	}
  
}
</script>

<style>
#app{
	height:100%;
	width: 100%;
}
 
</style>
