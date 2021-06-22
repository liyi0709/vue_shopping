<template>
    <div class="newsinfo-container">
        <h4 class="title">{{ newsInfo.title }}</h4>
        <p class="title2">
            <span>发表时间:{{ newsInfo.add_time }}</span>
            <span>点击:{{ newsInfo.click }}次</span><br>
              <router-link to="/home/commentList">
                <mt-button type="danger" size="large" plain>
                    评论
                </mt-button>
              </router-link>
        </p>
        <div class="content" v-html="newsInfo.content"></div>
       
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.newid,
            newsInfo:{}
        }
    },
    created(){
        this.getnewsInfo()
    },
    methods:{
        getnewsInfo(){
            this.$http.get('api/getnew/'+this.id).then(result =>{
                console.log("....");
                console.log("......."+result.body);
                // console.log(result.status)
                console.log(result.body.status)
                // console.log(result.body.message[0])
                
                if(result.body.status === 0){
                    this.newsInfo = result.body.message[0]
                }else{
                    console.log('获取数据失败')
                }
            })
        }
    }
    
}
</script>

<style lang="scss" scoped>
.newsinfo-container{
    padding: 20px;
    .title{
        font-size: 20px;
    }
}
</style>