<template>
  <div>
    <ul class="mui-table-view">
      <li
        class="mui-table-view-cell mui-media"
        v-for="item in newsList"
        :key="item.id"
      >
        <router-link :to="'/home/newsList/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h4>{{ item.title }}</h4>
            <h5>摘要：{{ item.zhaiyao }}</h5>
            <p class="mui-ellipsis">
              <span>发表时间：{{ item.add_time }}</span>
              <span>点击：{{ item.click }}次</span>
            </p>
            
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [],
    };
  },
  created() {
    this.getnewslist();
  },
  methods: {
    getnewslist() {
      this.$http.get("api/getnewslist").then((result) => {
        console.log(result.body);
        console.log(result.status);
        console.log(result.body.status);
        console.log(result.body.message);
        if (result.body.status === 0) {
          this.newsList = result.body.message;
        } else {
          console.log("获取数据失败");
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h4 {
      font-size: 15px;
    }
    h5 {
      font-size: 12px;
    }
    .mui-ellipsis {
      font-size: 12px;
      display: flex; //弹性布局
      justify-content: space-between;
    }
  }
}
</style>