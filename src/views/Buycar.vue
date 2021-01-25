<template>
    <div class="buycar">
        <navbar msg="购物车"></navbar>
        <div class="contents" v-if="lists.length">
          <div class="item" v-for="(item,index) in lists " :key="index">
            <img :src="item.url" alt="">
            <p>{{item.title}}</p>
            <div class="rights">
              <p>数量：{{item.count}}</p>
              <span>总价：{{(item.count*item.price).toFixed(2)}}</span>
            </div> 
          </div>
        </div>
        <div class="empty-cart" v-else>
          <img src="//static.yiwugou.com/mobile/assets/shopcarisnull.png" alt="购物车" class="cart-icon">
          <div class="title">购物车空空如也</div> 
          <div class="desc">登录后可同步购物车中商品</div> 
          <a :href="href" class="weui-btn">{{code==0?'登录':'去首页逛逛'}}</a>
        </div>
        <lists></lists>
    </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import lists from '../components/lists.vue'
export default {
  name:"buycar",
  components: { navbar,lists },
  data(){
    return{
      href:'/landing',
      code:0,
      lists:[]
    }
  },
  created(){
    if(localStorage.getItem('status')){
      this.href='/'
      this.code=1
    }else{
      this.code=0
      this.href='/landing'
    }
    this.getData()
  },
  methods:{
    getData(){
      const tel=localStorage.getItem('tel')
      this.axios.get('http://localhost:3000/buycars/'+tel).then(res=>{
        console.log(res.data.data)
        this.lists=[]
        this.lists=this.lists.concat(res.data.data)
        console.log(this.lists)
      }).catch(err=>{
        console.log(err)
      })
    }
  }

}
</script>

<style scoped>
  .buycar{
    padding-top: 1.194667rem;
  }
  /* 有商品时 */
  .buycar .contents {
    padding: .194667rem .266667rem .213333rem;
    overflow: hidden;
  }
  .buycar .contents .item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .213333rem;
  }
  .buycar .contents .item img{
    width: 18%;
    /* float: left; */
    height: auto;
  }
  .buycar .contents .item>p{
    width: 50%;
    font-size: 14px;
    font-weight: bold;
    line-height: .48rem;
    color: #333;
    height: .96rem;
    text-align: left;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
  }
  .buycar .contents .item .rights{
    width: 20%;
    color: #ff6600;
  }
  /* 无商品时 */
  .buycar .empty-cart{
    text-align: center;
    font-size:.48rem;
    color: #666;
    padding-bottom: .4rem;
  }
  .buycar .empty-cart .cart-icon{
    width: 48%;
    height:auto;
  }
  .buycar .empty-cart .title{
    margin-bottom: .133333rem;
  }
  .buycar .empty-cart .desc{
    margin-bottom: .533333rem;
    color: #999;
    font-size: .373333rem;
  }
  .buycar .empty-cart .weui-btn{
    padding: .163333rem .453333rem;
    background-color: #ff6600;
    color: #fff;
    font-size: .346667rem;
    border-radius: .166667rem;
  }
</style>