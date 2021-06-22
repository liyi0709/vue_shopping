<template>
  <!-- 1.1 创建路由 -->
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item
        ><img
          src="//gw.alicdn.com/imgextra/i3/O1CN01GKv8QN1nbyBHucfaj_!!6000000005109-0-tps-750-600.jpg_790x10000Q75.jpg_.webp"
          alt="篮球服"
      /></mt-swipe-item>
      <mt-swipe-item
        ><img
          src="//gw.alicdn.com/imgextra/i3/O1CN01QMTwEF1x9FVIa2wM6_!!6000000006400-0-tps-750-600.jpg_790x10000Q75.jpg_.webp"
          alt="realme"
      /></mt-swipe-item>
      <mt-swipe-item
        ><img
          src="https://gw.alicdn.com/imgextra/i1/O1CN01BIlbQa1v8flr8czhO_!!6000000006128-1-tps-750-604.gif"
          alt="尖叫"
      /></mt-swipe-item>
      <mt-swipe-item
        ><img
          src="//gw.alicdn.com/imgextra/i2/O1CN01hNxpN81xi3bHx67cJ_!!6000000006476-0-tps-750-600.jpg_790x10000Q75.jpg_.webp"
          alt="啤酒"
      /></mt-swipe-item>
      <mt-swipe-item
        ><img
          src="//gw.alicdn.com/imgextra/i2/O1CN012RsBCE1OA9jbGuUFs_!!6000000001664-0-tps-750-604.jpg_790x10000Q75.jpg_.webp"
          alt="饮料"
      /></mt-swipe-item>
      <mt-swipe-item
        ><img
          src="//gw.alicdn.com/imgextra/i2/O1CN01j3TgrL23XsUwgnLGP_!!6000000007266-0-tps-750-604.jpg_790x10000Q75.jpg_.webp"
          alt="爱心短袖"
      /></mt-swipe-item>
      <mt-swipe-item
        ><img
          src="//gw.alicdn.com/imgextra/i3/O1CN01yQtzpG1doezr24MXD_!!6000000003783-2-tps-750-600.png_790x10000.jpg_.webp"
          alt="手表"
      /></mt-swipe-item>
      <mt-swipe-item
        ><img
          src="//gw.alicdn.com/imgextra/i2/O1CN01tZBPtb1l5n7gesWTZ_!!6000000004768-0-tps-750-600.jpg_790x10000Q75.jpg_.webp"
          alt="尖叫"
      /></mt-swipe-item>
    </mt-swipe>
    <!-- 商品列表 -->
    <div
      class="mui-card-header mui-card-media"
      v-for="item in goodsList"
      :key="item.id"
    >
      <router-link :to="'/home/goodList/goodsinfo/' + item.id">
        <img class="mui-media-object mui-pull-left" :src="item.img_url" />
        <div class="mui-media-body">
         <p class="fon1">{{ item.title }}</p> <br>
          <h5>摘要:{{ item.zhaiyao }}</h5>
          <div class="mui-ellipsis">
            <p>售卖价:￥{{ item.sell_price }}</p>
            <p>市场价:￥{{ item.market_price }}</p>
            <p>库存量:{{ item.stock_quantity }}</p>
          </div>
          <div class="mui-ellipsis1">
            <p>发表时间:{{ item.add_time }}</p>
            <p>点击:{{ item.click }}次</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>


</template>
<script>
export default {
  data() {
    return {
      number: this.$route.params.pageindex,
      number: this.$route.params.artid,
      goodsList: [],
    };
  },
  created() {
    this.getgoodslist();
  },
  methods: {
    getgoodslist() {
      this.$http.get("api/getgoods?pageindex=number").then((result) => {
        console.log(result.body);
        console.log(result.status);
        console.log(result.body.status);
        console.log(result.body.message);
        if (result.body.status === 0) {
          this.goodsList = result.body.message;
        } else {
          console.log("获取数据失败");
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
// 轮播图样式
.mint-swipe {
  height: 300px;
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
// 商品列表样式
// 主体框架的样式
.mui-card-header.mui-card-media{
  display: block;
  padding: 10px;
  float: left;
  width: 50%;
  height: 450px;
  border: 1px solid #ccc;
}
// 文字主题框架的样式
.mui-card-header.mui-card-media .mui-media-body {
  margin-left: 10px;
  height: 390px;
}
// 文字的样式
.mui-card-header.mui-card-media .mui-media-body .fon1{
  font-size: 14px;
  color: #000;
  font-weight: bold;
}
.mui-pull-left { //图片的样式
     float: left; 
     padding:0px;
     margin:6px 1px
}

img{
      border:0px;
      width: 100%;
    }

</style>
