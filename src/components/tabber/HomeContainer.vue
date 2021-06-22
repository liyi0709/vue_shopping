<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item
        ><img
          src="https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg"
          alt="女孩"
      /></mt-swipe-item>
      <mt-swipe-item
        ><img
          src="http://img.alicdn.com/imgextra/i2/2206686532409/O1CN0192kCto1TfMnxatq8Z_!!2206686532409-0-lubanimage.jpg"
          alt="618手机"
      /></mt-swipe-item>
      <mt-swipe-item
        ><img
          src="//img.alicdn.com/imgextra/i4/2206686532409/O1CN01Dt3GIg1TfMnszYJKl_!!2206686532409-0-lubanimage.jpg"
          alt="电动牙刷"
      /></mt-swipe-item>
    </mt-swipe>


    <div class="home">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="/home/goodsList">
            <img
              src="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1"
              alt="天猫优选"
            />
            <div class="mui-media-body">天猫新品</div></router-link
          >
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="/home/newsList">
            <img
              src="https://gw.alicdn.com/tfs/TB1LvIxVAvoK1RjSZFDXXXY3pXa-183-144.png?getAvatar=1"
              alt="今日爆款"
            />
            <div class="mui-media-body">今日新闻</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="/home/interList">
            <img
              src="https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1"
              alt=""
            />
            <div class="mui-media-body">天猫国际</div></router-link
          >
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="/home/hungryList">
            <img
              src="https://gw.alicdn.com/tfs/TB1DaMyVpzqK1RjSZFoXXbfcXXa-185-144.png?getAvatar=1"
              alt="饿了吗"
            />
            <div class="mui-media-body">饿了吗</div></router-link
          >
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="/home/shopList">
            <img
              src="https://gw.alicdn.com/tfs/TB1FucwVwHqK1RjSZFgXXa7JXXa-183-144.png?getAvatar=1"
              alt="天猫超市"
            />
            <div class="mui-media-body">天猫超市</div></router-link
          >
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="/home/payList">
            <img
              src="https://gw.alicdn.com/tfs/TB1llI3f4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1"
              alt="充值中心"
            />
            <div class="mui-media-body">充值中心</div></router-link
          >
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="/home/cardList">
            <img
              src="https://gw.alicdn.com/tfs/TB1O_AyVwHqK1RjSZFPXXcwapXa-183-144.png?getAvatar=1"
              alt="机票酒店"
            />
            <div class="mui-media-body">机票酒店</div></router-link
          >
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="/home/eatList">
            <img
              src="https://gw.alicdn.com/tfs/TB19dcwVyrpK1RjSZFhXXXSdXXa-183-144.png?getAvatar=1"
              alt="淘宝吃货"
            />
            <div class="mui-media-body">淘宝吃货</div></router-link
          >
        </li>
      </ul>
    </div>
    <div class="maylike">
      <img src="https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png"   alt="你可能喜欢" />
    </div>

   
 <router-link to="/home/ulike">
        <div
      class="mui-card-header mui-card-media"
      v-for="item in ulike.slice()"
      :key="item.id"
     >
     
        <div class="mui-media-body">
         <h5>{{ item.title }}</h5>
         <p>ID:{{ item.id }}</p>
          <h5>摘要:{{ item.zhaiyao }}</h5>
          <div class="mui-ellipsis">
            
               <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          </div>
        </div>
         </div>
      </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
        id:this.$route.params.cateid,
        ulike:[]
    }
  },
  created() {
    this.getulikeInfo();
  },
  methods: {
    getulikeInfo() {
      this.$http.get("api/getimages/23"+this.cateid).then((result) => {
        console.log(result.body);
        console.log(result.status);
        console.log(result.body.status);
        console.log(result.body.message);
        if (result.body.status === 0) {
          this.ulike = result.body.message;
        } else {
          console.log("获取数据失败");
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 140px;
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-table-view.mui-grid-view.mui-grid-9 {
  background-color: snow;
  border: none;
  li {
    border: none;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.home {
  background-color: snow;
}
.maylike img{
  width: 200px;
  margin-top: 20px;
  margin-left: 20%;
}
.mui-card-header.mui-card-media {
    display: flex;
    padding: 10px;
}
.mui-card-header.mui-card-media .mui-media-body{
  display: block;
  margin-left: 10px;
  float: left;
  width: 90%;
  // border:1px solid gray;
}
</style>
