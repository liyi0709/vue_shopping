import VueRouter from 'vue-router'//导入vue路由插件
// 导入四个底部栏的组件
import HomeContainer from './components/tabber/HomeContainer.vue'
import MytbContainer from './components/tabber/MytbContainer.vue'
import ShopcarContainer from './components/tabber/ShopcarContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'
// 1.2导入路由
import GoodsList from './components/commodity/GoodsList.vue';//导入首页--商品列表
import GoodsInfo from './components/commodity/GoodsInfo.vue';
import NewsList from './components/news/NewsList.vue';//导入首页--新闻列表页
import NewsInfo from './components/news/NewsInfo.vue';//导入首页--新闻列表页--新闻详情页

// 导入首页的其他按钮
import InterList from './components/goods/InterList.vue';
import HungryList from './components/goods/HungryList.vue';
import ShopList from './components/goods/ShopList.vue';
import PayList from './components/goods/PayList.vue';
import CardList from './components/goods/CardList.vue';
import EatList from './components/goods/EatList.vue';
//导入首页--商品列表
import ulike from './components/tabber/HomeContainer.vue';
// 导入评论页面
import CommentList from './components/comment/CommentList.vue';//导入首页--商品列表
import CommentInfo from './components/comment/CommentInfo.vue';


//创建路由对象
var router = new VueRouter({

    routes: [
        // 配置4个底部导航栏的路由路径
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/mytaobao', component: MytbContainer },
        { path: '/search', component: SearchContainer },
        // 1.3给路由一个路径
        { path: '/home/goodsList/', component: GoodsList },//设置首页--商品列表
        { path: '/home/goodList/goodsinfo/:id', component: GoodsInfo },
        { path: '/home/newsList', component: NewsList },//设置首页--今日新闻
        { path: '/home/newsList/newsinfo/:newid', component: NewsInfo },//设置
        // 设置首页其它按钮
        { path: '/home/shopList', component: ShopList },//设置首页--天猫新品
        { path: '/home/interList', component: InterList },
        { path: '/home/hungryList', component: HungryList },
        { path: '/home/payList', component: PayList },
        { path: '/home/cardList', component: CardList },
        { path: '/home/eatList', component: EatList },
        // 首页的商品列表图
        { path: '/home/ulike/:cateid', component: ulike },
        // 评论页面
        { path: '/home/commentList/', component: CommentList },//设置首页--商品列表
        { path: '/home/commentList/commentinfo/:artid', component: CommentInfo },

    ],
    linkActiveClass: 'mui-active'
})

export default router//导出（暴露）该路由