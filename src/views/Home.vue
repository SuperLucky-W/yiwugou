<template>
  <div class="container">
      <div class="head">
        <div class="searchbar">
          <img src="../assets/img/logo_white.png" alt="">
          <input type="text" placeholder="请输入关键字">
          <van-icon name="search" />
        </div>
      </div>
      <div class="banner">
        <div class="modules">
          <div class="nav_list">
            <a href="#" class="module">
              <img src="../assets/img/banner1.png" alt="">
              <p>限时秒杀</p>
            </a>
            <a href="#" class="module">
              <img src="../assets/img/banner8.png" alt="">
              <p>品牌馆</p>
            </a>
          </div>
          <div class="nav_list">
            <a href="#" class="module">
              <img src="../assets/img/banner2.png" alt="">
              <p>尾货清仓</p>
            </a>
            <a href="#" class="module">
              <img src="../assets/img/banner9.png" alt="">
              <p>产业带</p>
            </a>
          </div>
          <div class="nav_list">
            <a href="#" class="module">
              <img src="../assets/img/banner3.png" alt="">
              <p>网红爆款</p>
            </a>
            <a href="#" class="module">
              <img src="../assets/img/banner10.png" alt="">
              <p>直播</p>
            </a>
          </div>
          <div class="nav_list">
            <a href="#" class="module">
              <img src="../assets/img/banner4.png" alt="">
              <p>跨境资源</p>
            </a>
            <a href="#" class="module">
              <img src="../assets/img/banner11.png" alt="">
              <p>转租转让</p>
            </a>
          </div>
          <div class="nav_list">
            <a href="#" class="module">
              <img src="../assets/img/banner5.png" alt="">
              <p>进口货源</p>
            </a>
            <a href="#" class="module">
              <img src="../assets/img/banner12.png" alt="">
              <p>求购与库存</p>
            </a>
          </div>
          <div class="nav_list">
            <a href="#" class="module">
              <img src="../assets/img/banner6.png" alt="">
              <p>论坛</p>
            </a>
            <a href="#" class="module">
              <img src="../assets/img/banner13.png" alt="">
              <p>投诉曝光</p>
            </a>
          </div>
          <div class="nav_list">
            <a href="#" class="module">
              <img src="../assets/img/banner7.png" alt="">
              <p>English</p>
            </a>
            <a href="#" class="module">
              <img src="../assets/img/banner14.png" alt="">
              <p>帮助中心</p>
            </a>
          </div>
        </div>
        <div class="markets">
          <a href="#">
            <img src="../assets/img/banner-1.png" alt="">
          </a>
          <a href="#">
            <img src="../assets/img/banner-2.png" alt="">
          </a>
          <a href="#">
            <img src="../assets/img/banner-3.png" alt="">
          </a>
          <a href="#">
            <img src="../assets/img/banner-4.png" alt="">
          </a>
          <a href="#">
            <img src="../assets/img/banner-5.png" alt="">
          </a>
          <a href="#">
            <img src="../assets/img/banner-6.png" alt="">
          </a>
          <a href="#">
            <img src="../assets/img/banner-7.png" alt="">
          </a>
          <a href="#">
            <img src="../assets/img/banner-8.png" alt="">
          </a>
          <a href="#">
            <img src="../assets/img/banner-9.png" alt="">
          </a>
        </div>
        <a href="#" class="wapbanner">
          <img src="../assets/img/wapbanner.jpg" alt="">
        </a>
        <div class="gutter"></div>
      </div>
      <div class="products">
          <div class="item" v-for="(item,index) in lists" :key="index" @click="jump(item.id)">
            <div class="img">
              <img :src="'https://img1.yiwugou.com/'+item.picture2" alt="" />
            </div>
            <div class="info">
              <div class="title">
                <h3>{{item.title}}</h3>
              </div>
              <div class="price">
                <span>{{item.sellPrice?"￥"+parseFloat(item.sellPrice/100).toFixed(2):''}}</span>
              </div>
              <div class="start-number">{{item.startNum?item.startNum+"个起购":'价格联系商家'}}</div>
              <div class="shop-name">{{item.shopName}}</div>
            </div>
          </div>
          <div class="loadmore">
            <span>没有更多啦</span>
          </div>
      </div>
      <div class="footer">
        <ul>
          <li>
            <van-icon name="user-o" />
            <p>客服端</p>
          </li>
          <li>
            <van-icon name="newspaper-o" />
            <p>手机版</p>
          </li>
          <li>
            <van-icon name="cashier-o" />
            <p>电脑版</p>
          </li>
        </ul>
        <p>© 2012-2021 yiwugo.com 版权所有</p>
      </div>
      <Foot></Foot>
  </div>
</template>

<script>

import Foot from '../components/foot.vue'
export default {
  name: 'Home',
  components:{
    Foot
  },
  data(){
    return{
      lists:[]
    }
  },
  created(){

      this.axios.get('http://localhost:3000/').then(res=>{
        console.log(res.data.data);
        this.lists=this.lists.concat(res.data.data)
      }).catch(err=>{
        console.log(err);
      })

  },
  methods:{
    jump(i){
      this.$router.push('/detail/'+i)
    }
  }
}
</script>

<style scoped>
  .container{
    height: 100vh;
    background-color: #f8f8f8;
  }
  /* 头部搜索条 */
  .head{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 3;
    height: 1.333333rem;
    line-height: 1.333333rem;
    background-color: #ff6600;
  }
  .head .searchbar{
    position: relative;
    padding: 0 .266667rem;
  }
  .head img{
    width: 14%;
    height: .388rem;
    margin-right: .266667rem;
  }
  .head input{
    width: 81%;
    border: 1px solid transparent;
    border-radius: .133333rem;
    height: .833333rem;
  }
  .head .van-icon{
    position: absolute;
    right:5%;
    top: 25%;
    font-size: .633333rem;
    color: #999;
  }
  /* banner列表 */
  /* modules */
  .banner{
    margin-top: 1.333333rem;
  }
  .modules{
    /* display: flex; */
    width: 100%;
    overflow: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }
  .modules .nav_list{
    width: 20%;
    display: inline-block;
    margin-bottom: .266667rem;
    box-sizing: border-box;
  }
  .modules .nav_list a{
    color: #666;
  }
  .modules .module{
    width: 100%;
    display: block;
    text-align: center;
    padding-top: .266667rem;
    box-sizing: border-box;
  }
  .modules img{
    width: 1.066667rem;
    height: 1.066667rem;
  }
  /* markets */
  .markets{
    width: 100%;
    overflow: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    box-sizing: border-box;
  }
  .markets a{
    display: inline-block;
    width: 40%;
    /* padding-bottom:23.6% ; */
    margin-left: .266667rem;
    border-radius: .266667rem;
  }
  .markets a img{
    width: 100%;
  }
  .banner>.wapbanner{
    display: block;
    margin-top: .133333rem;
    font-size: 0;
  }
  .wapbanner img{
    width: 100%;
  }
  /* 白条 */
  .banner .gutter{
    width: 100%;
    height: .266667rem;
  }
  /* product */
  .products .item {
    display: flex;
    position: relative;
    overflow: hidden;
    background: #fff;
    margin-top: .16rem;
    padding: 0 .266667rem;
    box-sizing: border-box;
  }
  .products .item .img{
    width: 30%;
    height: 2.933333rem;
    /* position: relative; */
  }
  .products .item .img img{
    /* position: absolute; */
    width: 100%;
    height: 100%;
    background-size: contain;
  }
  .products .item .info{
    padding: .24rem;
    width: 70%;
    box-sizing: border-box;
    overflow: hidden;
  }
  .products .item .info h3{
    font-size: 14px;
    line-height: .48rem;
    color: #333;
    height: .96rem;
    text-align: left;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
  }
  .products .item .info .price{
    font-size: .373333rem;
    font-weight: 700;
    color: #ff6600;
    line-height: .373333rem;
    margin: .133333rem 0 .16rem 0;
    box-sizing: border-box;
  }
  .products .item .info .start-number{
    font-size: .32rem;
    color: #999;
    font-weight: 400;
    margin-bottom: .186667rem;
  }
  .products .item .info .shop-name{
    font-size: .32rem;
    color: #666;
  }
  /* loadmore */
  .products .loadmore{
    border-top: 1px solid #e5e5e5;
    margin:.896rem 1.75rem .56rem;
    text-align: center;
    font-size: .373333rem;
  }
  .products .loadmore span{
    position: relative;
    top: -0.283333rem;
    color: #999;
    background-color: #fff;
    padding: 0 .333333rem;
  }
  .footer{
     margin-bottom: 1.414133rem;
  }
  
  .footer ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .footer li{
    text-align: center;
    color: #848689;
    font-size: .373333rem;
  }
  .footer li .van-icon{
    font-size: .733333rem;
  }
  .footer>p{
    height: 1.173333rem;
    line-height: 1.173333rem;
    font-size: 12px;
    color: #848689;
    text-align: center;
    margin-top: .266667rem;
  }
</style>
