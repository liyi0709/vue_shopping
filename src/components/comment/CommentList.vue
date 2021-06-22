<template>
   <div>
   <div>
     <h1 class="h1t">评论</h1>
       <ul class="mui-table-view">
      <li
        class="mui-table-view-cell mui-media"
      >
       <div class="mui-media-body">
            <h4>星星狐</h4>
            <span>发表时间：19小时前</span>
            <p class="mui-ellipsis">
              <span>内容：真的很不错！！</span>
            </p>
        </div>
        <br>
        <div class="mui-media-body">
            <h4>里里</h4>
            <span>发表时间：1小时前</span>
            <p class="mui-ellipsis">
              <span>内容：真的很不错！！</span>
            </p>
        </div>
        </li>
      </ul>
      <br>
      <router-link to="/home">
                <mt-button type="default" size="large">
                    我要评论
                </mt-button>
              </router-link>
   </div>
    <ul class="mui-table-view">
      <li
        class="mui-table-view-cell mui-media"
        v-for="item in commentList"
        :key="item.id"
      >
        <router-link to="/home/commentList/commentinfo/">   
          <div class="mui-media-body">
            <h4>{{ item.user_name }}</h4>
            <p class="mui-ellipsis">
              <span>发表时间：{{ item.add_time }}</span>
              <span>内容：{{ item.content }}次</span>
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
      number: this.$route.params.pageindex,
      id: this.$route.params.id,
      commentList: []
  }
  },
    created(){
        this.getcommentlist()
    },
   methods: {
    getcommentlist() {
      this.$http.get("api/getcomments/43?pageindex=1").then((result) => {
        console.log(result.body);
        console.log(result.status);
        console.log(result.body.status);
        console.log(result.body.message);
        if (result.body.status === 0) {
          this.commentList = result.body.message;
        } else {
          console.log("获取数据失败");
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.h1t{
//  border:1px solid red;
 margin-left:45% ;
}

</style>