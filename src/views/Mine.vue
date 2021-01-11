<template>
    <div class="mine">
        <div class="head">
            <van-nav-bar title="用户登录"  color="#fff" left-arrow>
                <template #right>
                    <van-cell is-link @click="showPopup">
                        <van-icon name="ellipsis" size="18" color="#fff"/>
                    </van-cell>
                    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
                        <div class="top">
                            <p>首页</p>
                            <p class="solid">分类搜索</p>
                            <p class="solid">购物车</p>
                        </div>
                        <div class="bottom">
                            <p>取消</p>
                        </div>
                    </van-popup>
                </template>
            </van-nav-bar>
        </div>
        <div class="username-login" style="display:none">
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input type="text" placeholder="账号/邮箱/已验证手机" class="weui-input">
                    </div> 
                    <div class="weui-cell__ft" style="display: none;">
                        <van-icon class="weui-icon-cancel cc" name="close" />
                    </div>
                </div> 
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input type="password" placeholder="请输入密码" class="weui-input">
                    </div> 
                    <div class="weui-cell__ft" style="display: none;">
                         <van-icon class="weui-icon-cancel cc" name="close" />
                    </div>
                    <div class="weui-cell__ft">
                        <a href="/password/forget" class="weui-vcode-btn">忘记密码</a>
                    </div>
                </div>
            </div>
            <div class="weui-btn-area">
                <button class="weui-btn weui-btn_primary login-btn" style="opacity: 0.5;">登录</button>
            </div>
        </div>
        <div class="mobile-login" style="display: block;">
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input type="tel" placeholder="请输入手机号" class="weui-input">
                    </div> 
                    <div class="weui-cell__ft" style="display: none;">
                        <i class="weui-icon-cancel cc"></i>
                    </div> 
                    <div class="weui-cell__ft">
                        <button class="weui-vcode-btn">获取验证码</button>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input type="tel" placeholder="请输入收到的验证码" class="weui-input">
                    </div> 
                    <div class="weui-cell__ft" style="display: none;">
                        <i class="weui-icon-cancel cc"></i>
                    </div>
                </div>
            </div> 
            <div class="weui-btn-area">
                <button class="weui-btn weui-btn_primary login-btn" style="opacity: 0.5;">登录</button>
            </div> <!---->
        </div>

        <div class="weui-cells__tips">
            <span>短信验证码登录</span> 
            <a href="/auth/register">手机快速注册</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show:false
        }
    },
    methods:{
        showPopup(){
            this.show=true
        }
    }
}
</script>

<style scoped>
    body,html{
        height: 100%;
        overflow: hidden;
        background-color: #f8f8f8;
    }
    .head{
        width: 100%;

        background-color:#ff6600;
    }
    .head .van-nav-bar{
     
        background-color: #ff6600;
    }
    /deep/ .van-nav-bar__content{
          height: 1.2rem;
    }
    /deep/ .head .van-icon {
        color: #fff;
    }
    /deep/ .head .van-nav-bar__title {
        color: #fff; 
        font-size: .48rem;
    }
    /deep/ .head .van-cell{
        background-color: #ff6600;
    }
    /deep/ .head .van-cell__right-icon{
        display: none;
    }
    .head .van-popup{
        background-color: #efeff4;
    }
    .head .van-popup .top{
        /* height: 3.904rem; */
        background-color: #fcfcfd;
    }
    .head .van-popup .top P{
        font-size: .48rem;
        text-align: center;
        line-height: .746667rem;
        padding: .266667rem 0;
        position: relative;
    }
    .head .van-popup .top .solid::after{
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #e5e5e5;
        color: #e5e5e5;
        transform-origin: 0 0;
        transform: scaleY(.5);
    }
    .head .van-popup .bottom{
        margin-top: .21rem;
        background-color: #fcfcfd;
    }
    .head .van-popup .bottom p{
        padding: .266667rem 0;
        font-size: .48rem;
        line-height: .746667rem;
    }
    /* 账号密码登录 */
    .weui-cells {
        margin-top: 1.17647059em;
        background-color: #fff;
        line-height: 1.47058824;
        font-size: 17px;
        overflow: hidden;
        position: relative;
    }
    .weui-cell {
        padding: 10px 15px;
        position: relative;
        display: -webkit-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .weui-cell:before {
       content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #e5e5e5;
        color: #e5e5e5;
        transform-origin: 0 0;
        transform: scaleY(.5);
        left: 15px;
        z-index: 2;
    }
    .weui-cell .weui-input {
        width: 100%;
        border: 0;
        outline: 0;
        background-color: transparent;
        font-size: inherit;
        color: inherit;
        height: 1.47058824em;
        line-height: 1.47058824;
    }
    .weui-cell .weui-cell__ft {
        text-align: right;
        color: #999;
    }
    .weui-cell .weui-cell__ft .cc{
        color: #ccc;
        font-size: .586667rem;
        vertical-align: middle;
    }
    .weui-cell .weui-cell__ft a{
        color: #ff6600;
        display: inline-block;
        padding: 0 .6em 0 .7em;
        border-left: 1px solid #e5e5e5;
        margin-left: 5px;
        height: auto;
        line-height: normal;
        vertical-align: middle;
        font-size: 17px;
    }
    /* 登录按钮 */
    .weui-btn-area {
        margin: 1.17647059em 15px .3em;
        opacity: .9;
    }
    
    .login-btn {
        margin: 5vw 0;
    }
     button.weui-btn, input.weui-btn {
        width: 100%;
        border-width: 0;
        outline: 0;
    }
    .weui-btn_primary {
        background-color: #ff6600;
    }
    .weui-btn {
        position: relative;
        display: block;
        padding-left: 14px;
        padding-right: 14px;
        box-sizing: border-box;
        font-size: 18px;
        text-align: center;
        text-decoration: none;
        color: #fff;
        line-height: 2.55555556;
        border-radius: 5px;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        overflow: hidden;
    }
    /* 获取验证码 */
    .weui-vcode-btn {
        display: inline-block;
        padding: 0 .6em 0 .7em;
        border-left: 1px solid #e5e5e5;
        height: auto;
        line-height: normal;
        font-size: 17px;
        color: #f60;
        border: .026667rem solid transparent;
        border-left-color: #e5e5e5;
        background-color: #fff;
        margin-left: 5px;
        vertical-align: middle;

    }
    /* 切换 */
    .weui-cells__tips {
        display: flex;
        justify-content: space-between;
        margin-top: .3em;
        color: #999;
        padding-left: 15px;
        padding-right: 15px;
        font-size: 14px;
    }
    .weui-cells__tips a{
        color: #999;
    }
</style>