<template>
   <div class="product">
          <div class="panel-box">
            <div class="loadmore">
              <span>猜你喜欢</span>
            </div>
          </div>
          <div class="content">
            <div class="item" v-for="(item,index) in list" :key="index"  @click="jump(item.id)">
              <img :src="'https://img1.yiwugou.com/'+item.picture2" alt="">
              <div class="info">
                <p>{{item.title}}</p>
                <span>{{item.sellPrice?"￥"+parseFloat(item.sellPrice/100).toFixed(2):'价格联系商家'}}</span>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
    name:'lists',
    components:{

    },
    data(){
        return{
        list:[]
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            this.axios.get('http://localhost:3000/').then(res=>{
            // console.log(res.data.data);
                this.list=this.list.concat(res.data.data)
            }).catch(err=>{
                console.log(err);
            })
        },
        jump(i){
            // console.log(i)
            this.$router.push('/detail/'+i)
        }
    }
}
</script>

<style scoped>
    .product{
        background-color: #f8f8f8;
        overflow: hidden;
    }
    .product .panel-box .loadmore{
        border-top: 1px solid #e5e5e5;
        margin:.896rem 1.75rem .56rem;
        text-align: center;
        font-size: .373333rem;
    }
    .product .panel-box .loadmore span{
        position: relative;
        top: -0.283333rem;
        color: #999;
        background-color: #fff;
        padding: 0 .333333rem;
    }
    .product .content{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .product .content .item{
        width: 49%;
    }
    .product .content .item img{
        width: 100%;
        height: 4.962667rem;
    }
    .product .content .item .info{
        font-size: .373333rem;
        padding: .266667rem .4rem;
    
    }
    .product .content .item .info p{
        
        color: #333;
        font-weight: bold;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .product .content .item .info span{
        color: #ff6600;
        margin-top: .24rem;
        display: block;
    }
</style>