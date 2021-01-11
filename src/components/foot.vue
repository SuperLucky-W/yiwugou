<template>
  <div class="foot">
      <router-link to="/">
        <van-icon name="wap-home-o" />
        <p>首页</p>
      </router-link>
      <router-link to="/classify">
        <van-icon name="apps-o" />
        <p>分类</p>
      </router-link>
      <router-link to="/message">
        <van-icon name="chat-o" />
        <p>消息</p>
      </router-link>
      <router-link to="/buycar">
        <van-icon name="cart-o" />
        <p>购物车</p>
      </router-link>
      <router-link to="/mine">
        <van-icon name="manager-o" />
        <p>我的</p>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'foot',


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .foot{
    width:100%;
    padding: .133333rem 0 0;
    height: 1.413333rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;

    z-index: 4;
    background-color: #fff;
  }
  a{
    color: #999;
    text-align: center;
  }
  a.router-link-exact-active{
    color: #ff6600;
  }
  .van-icon{
    font-size: .733333rem;
  }
  p{
    margin: 0;
    padding: 0;
  }
</style>
