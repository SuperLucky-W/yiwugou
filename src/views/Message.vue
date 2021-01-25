<template>
  <div class="message">
    <div class="head">
      <p>咚咚消息</p>
      <div class="right">黑名单</div>
    </div>
    <div class="ipt">
      <input type="text" placeholder="输入手机号/昵称/账号">
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from '../components/foot.vue';
export default {
  name:'message',
    components:{
      Foot

    },
}
</script>

<style scoped>
  .message{
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
  }
  .message .head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.333333rem;
    padding: 0 .4rem;
  }
  .message .head>p{
    font-size: .48rem;
    font-weight: bold;
    color: #ff6600;
  }
  .message .ipt{
    padding: .213333rem .266667rem;
  }
  .message .ipt input{
    width: 100%;
    height: .714667rem;
    border: 1px solid #e3e3e3;
    border-radius: .1rem;
    text-align: center;
  }
</style>