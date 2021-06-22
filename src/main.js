//入口函数文件
console.log('准备就绪.....')

import Vue from 'vue'
import app from './App.vue'
import { Header, Swipe, SwipeItem ,Search,Button} from 'mint-ui'; //导入mintUI的header，轮播图组件
// import { Swipe, SwipeItem } from 'mint-ui';//导入轮播图
// import { Button } from 'mint-ui';

import './lib/mui/css/mui.css' //导入mui的样式
import './lib/mui/css/icons-extra.css'

// 1.1导入路由器
import VueRouter from 'vue-router'
// 1.2使用路由器
Vue.use(VueRouter)
// 1.3是用自己的路由器
import router from './router.js'
// 2.1导入数据加载的插件
import VueResource from 'vue-resource' //vue-resource from后面这种写法是在npm中下载的


// 2.2使用该插件
Vue.use(VueResource) //使用vueresource
// 2.3设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005/'
// 2.4设置全局post请求的参数
Vue.http.options.emulateJSON = true;

Vue.component(Header.name, Header);//使用mintUI
// 使用轮播图
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Search.name, Search);
// 使用button
Vue.component(Button.name, Button);

var vm = new Vue({
    el: '#app',
    data: {

    },
    methods: {

    },
    render: c => c(app),
    router //1.4挂载路由
})