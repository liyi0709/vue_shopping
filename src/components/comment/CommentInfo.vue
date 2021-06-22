<template>
  <div class="goodsinfo-container">
    <h4 class="title">{{ commmentInfo.title }}</h4>

    <div class="content" v-html="commentInfo.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.artid,
      commentInfo: {},
    };
  },
  created() {
    this.getcommentInfo();
  },
  methods: {
    getgoodsInfo() {
      this.$http.get("api/postcomment/" + this.id).then((result) => {
        console.log("....");
        console.log(result.body);
        // console.log(result.status)
        console.log(result.body.status);

        // console.log(result.body.message[0])

        if (result.body.status === 0) {
          this.commentInfo = result.body.message[0];
        } else {
          console.log("获取数据失败");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  // margin-top: 255px;
  padding: 20px 5px;
  .title {
    font-size: 20px;
  }
  .content {
    // border: 1px solid blue;
    font-size: 18px;
    text-align: left;
    
    // margin: 5px;
 
  }
}
.content>>>img{
      border:0px;
      width: 100%;
    }
   
  
   
  
</style>