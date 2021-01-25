<template>
  <div class="mine">
    <div class="head">
      <img src="../assets/img/app-logo.jpg" alt="" />
      <div class="title">
        <p class="t1">用户</p>
        <p>啦啦啦</p>
      </div>
    </div>
    <div class="buyer-menu">
      <a href="#" class="menu-item"
        ><div class="icon buyer-order"></div>
        <div class="text">购买订单</div></a
      >
      <a href="#" class="menu-item"
        ><div class="icon address"></div>
        <div class="text">收货地址</div></a
      >
      <a href="#" class="menu-item"
        ><div class="icon favorites"></div>
        <div class="text">收藏夹</div></a
      >
      <a href="#" class="menu-item"
        ><div class="icon coupon"></div>
        <div class="text">优惠券</div></a
      >
      <a
        href="http://h.yiwugou.com/help/help_center/menu.html?t=1526004017715"
        class="menu-item"
        ><div class="icon help-center"></div>
        <div class="text">帮助中心</div></a
      >
    </div>
    <div class="btn-area">
      <div class="btn" @click="quit()">退出登陆</div>
    </div>
    <a href="//a.app.qq.com/o/simple.jsp?pkgname=com.yiwugou.yiwukan" class="hint">
    <strong>提示：</strong>退款/售后请前往义乌购 App 操作，退款将退至 App 钱包。
    <a href="//a.app.qq.com/o/simple.jsp?pkgname=com.yiwugou.yiwukan">点击下载 APP</a></a>
    <Foot></Foot>
  </div>
</template>

<script>
import { Dialog } from 'vant';

import Foot from '../components/foot.vue';
// Dialog({ message: '提示' });
  export default {
    name:'mine',
    components:{
      Foot

    },
    data(){
      return{

      }
    },
    methods:{
      quit(){
        Dialog.confirm({
          title: '温馨提示',
          message: '您确定要退出吗？',
        }).then(() => {
            console.log(111)
            localStorage.removeItem('status')
            localStorage.removeItem('tel')
            this.$router.push('/')
        }).catch(() => {
            console.log(222)
        });
      }
    }
  };
</script>

<style scoped>
  .mine {
    width: 100%;
    height: 100vh;
  }
  .mine .head {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 20px;
    color: #fff;
    background: url("../assets/img/mine.png") no-repeat center center;
    background-size: cover;
  }
  .mine .head img {
    width: 1.866667rem;
    height: 1.866667rem;
    border-radius: 50%;
    margin-right: 0.266667rem;
    box-shadow: 0 0 10px #fefefe;
    background: #fff;
  }
  .mine .head .title {
    font-size: 0.32rem;
  }
  .mine .head .t1 {
    font-size: 0.426667rem;
  }
  .mine .buyer-menu{
    padding: .533333rem 0;
    overflow: hidden;
  }
  .mine .buyer-menu .menu-item{
    float: left;
    width: 25%;
    text-align: center;
    overflow: hidden;
    margin-bottom: .533333rem;
    font-size: .373333rem;
    color: #666;
  }
  .mine .buyer-menu .menu-item .icon{
    display: inline-block;
    height: 1.333333rem;
    line-height: 1.333333rem;
    width: 1.333333rem;
    background: no-repeat 50%/cover;
  }
  .mine .buyer-menu .menu-item .icon.buyer-order {
    background-image: url('../assets/img/mine-1.png');
  }
  .mine .buyer-menu .menu-item .icon.address {
    background-image: url('../assets/img/mine-2.png');
  }
  .mine .buyer-menu .menu-item .icon.favorites {
    background-image: url('../assets/img/mine-3.png');
  }
  .mine .buyer-menu .menu-item .icon.coupon {
    background-image: url('../assets/img/mine-4.png');
  }
  .mine .buyer-menu .menu-item .icon.help-center{
    background-image: url('../assets/img/mine-5.png');
  }
  .mine .btn-area {
    padding: 0 .4rem;
    margin: 1.066667rem 0 .266667rem;
  }
  .mine .btn-area .btn {
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: .373333rem;
    padding-right: .373333rem;
    box-sizing: border-box;
    font-size: .48rem;
    text-align: center;
    text-decoration: none;
    color: #fff;
    line-height: 2.55555556;
    border-radius: .133333rem;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    overflow: hidden;
    background-color: #f60;
    margin-bottom: .266667rem;
  }
  .hint {
    display: block;
    line-height: .533333rem;
    height: 1.066667rem;
    font-size: .426667rem;
    padding: 0 .4rem;
    color: #999;
  }
  .hint a {
    color: #f60;
  }
</style>