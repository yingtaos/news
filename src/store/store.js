import Vue from "vue";
import Vuex from "vuex";
Vue.use( Vuex )


var store = new Vuex.Store({
	state:{
		count : [],
		detail:""
	},
	mutations : {
		listData(state,newslist){			
			store.state.count=newslist			
		},
		mountedData(state,res){
			store.state.count=res
		},
		upDetailData(state,detail){
			store.state.detail=detail
		}
	}
})



export default store;