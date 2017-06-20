import Vue from 'vue'
import App from './App.vue'

import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use( VueResource );
Vue.use( VueRouter );
Vue.use( Mint );
//1.定义模板
import Footer from "./components/footer.vue";
import Index from "./components/index/index.vue";
import Header from "./components/index/header.vue";
import Navbar from "./components/index/navbar.vue";
import Navlist from "./components/index/navlist.vue";
import Detail from "./components/index/detail.vue";

import Search from "./components/index/search.vue";
import Live from "./components/live/live.vue";
import Topic from "./components/topic/topic.vue";
import My from "./components/my/my.vue";
//2.配置路由
var routes = [
	{path:"/index/0",name:"index",component:Index},
	{path:"/detail",name:"detail",component:Detail},
	{path:"/:aid",name:"tab",component:Navlist},
	{path:"/search",name:"search",component:Search},
	{path:"/live",name:"live",component:Live},
	{path:"/topic",name:"topic",component:Topic},
	{path:"/my",name:"my",component:My},
	{path:"*",redirect:"/index/0"}
]

//3.获取路由实例
var router = new VueRouter({
	routes
})

//4.挂载路由
new Vue({
  el: '#app',
  router,
	render: h => h(App)
})
