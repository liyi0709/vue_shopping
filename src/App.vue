<template>
  <div class="app-container">
    <!-- 顶部区域 header -->
    <header fixed class="myheader">
      <div class="mui-input-row mui-search">
        <input
          type="search"
          class="mui-input-clear"
          placeholder="寻找宝贝店铺"
        />
       
      </div>
    </header>

    <!-- 中间内容区域 路由的router-view -->
    <!-- 增加动画 -->
    <transition mode="out-in">
      <router-view></router-view>
    </transition>

    <!-- 底部区域 路由的router-link -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"
          ><span class="mui-badge">9</span></span
        >
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/mytaobao">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的淘宝</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
    <!-- <h1>这是APP组件</h1> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.app-container {
  overflow-x: hidden;
}
// 页面顶部的样式
.myheader {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAwCAMAAACR11I4AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADwUExURUdwTP//////////////////////////7v//7f//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AP//AP//////////////////////////////AP//AP//AP//AP//AP//AP//////AP//AP//AP//AP//AP//AP//////AIlGdUwAAABOdFJOUwD8w3w45vkBBPYt3gqWYYieMGvry+/jvyZmPNAYBx6jbylXNBvaTUjUFA+vsw1Ad4PXUyMSqY3zSw/HEFxDkXO6oepxVMf7pqvePzXRHLxDEf8AAAORSURBVEjHnVZpY6IwEOVSQUABFbxARWu13lq1W2vt9twT//+/WXJBiOjudr6QYx6ZvHmZhOPSTHy09r0c91nLlYLQto317j9AX+SomQ+QDeJZd+h1qrvzIb18P76//cSdNsbXYDBSTRcqaIDPCBvfS4F/PQJ7v0M9AXmrLnfjt0oBa85SZvZ7d0T2/AV0q9hvmTeyQarZ12nLhwYDKOLln4LzVkyE8EbwL2FHzpy6V9TFYGDT0TjuufVrCWTDaO9XxHf1MObJxJrCv1L7d+14VcMfskx7YzL7QI1+Q/hXKnn8aOmmppo4lCbxmPzyfDz++hG2hihfil49Kz4R/0CkU8j9hrnj1nBtfRhmIePo7V4KXr5H+EyKHC0w8dThuDokapC6hWscwP50SioFlUL47cEkZqWbYdNbdUxpet33C9ZBLBZBsCrC63T82KotoO9J+ZxwGsDJYM+X29jcUlFowlnhwTWJRCJMKNmKFUlSc87C7R5NQJ3sGpJVNlk4n1VQQ3HG65a+EX0NenToAx5Gv0DdbBt2u+Hf+M1Qk0NSTDRzlWR5Qk4R6tajE6NDHmeBkE+WIgbPbdGwQeirqTQ9uX6Ou4zHRWUca6qGYygkHRl8Tht6QNf4jAl0zubweKth89Z/KNQs6zATRR05boXyQM1UsoS0KzRcTqxl2jinUnDJpqHrgBJTbD4Ya/4FPwDcqKl4IIusfAHPbxdGk+JPSOJ1vKWVoT9uinNxdmjPcS01q15zEtdMheUfHp1sLAmGfybQXEoN5HJQtlLS00wjmmsGSf3EpcMG7JhTTz6Dn0DJ15P6RdEr0UhYYnlb8OFZSBA1EStb8C0EJ2JzUcWAukdShHiJwu9EcI2CijZnzm9oj3GceHd5Cu9wuWkLkQ7yN8L4ZgTvowGLOt0etdOySA5Y0InTv43gK3TBKztqz33Qnp5oSIrLR5R+rYEGWhyFzyy9Xn5GIUsC3pYVUNEC+4j/Df7Gp2m3NNMA7aWwgpHivMLwGfPeSbn4GwUXkpRdxs+jBeGOZ+IxlSRYMeroJbQwqhT7OPvmlrhFN2bdpsCjwiQhXpyqQEUabUa+lJrdwsciU1GFVruuMaVvv00uL90TvPkPr8ThnDxiWtHYFPF1fwknNNZhQXh0ImYc+gHVHTHvkZMrn2E0GDGvi3wr417AV5lbsH/qol0K360fRoRnVe9rn3qWu6tut9O7SYz9AWZChIYAa6nHAAAAAElFTkSuQmCC")
    no-repeat;
  background-position: 8px 8px;
  background-size: 27px 20px;
  background-color: #ff852a;
  width: 100%;
  // border: 1px solid blue;
  padding: 2px 9px 2px 42px;
  z-index: 900;
  position: relative;
}
// 搜索框样式
.mui-input-row.mui-search {
  height: 30px;
  margin-top: 1px;
  margin-bottom: 3px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 5px;
}
// 设置搜索框的背景颜色
.mui-input-clear {
  background-color: #f40;
  padding-top: 2px; //让文字居中对齐
}
// 设置placeholder的文字颜色
input::-webkit-input-placeholder {
  /* placeholder颜色  */
  color: rgb(238, 235, 235);
  font-size: 14px;
  text-align: center;
}

// 动画的进入和离开分开写 是解决了动画切换时的方向问题，
// 进的时候从右往左进入 出的时候也是从右往左出
.v-enter {
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
}
.v-leave-to {
  //开始和结束
  opacity: 0;
  transform: translateX(-100%); //100%整个页面
  position: absolute; //解决切换时候的上下跳动
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
</style>