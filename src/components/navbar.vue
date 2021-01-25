<template>
    <div class="head">
        <div class="left" @click="back">
            <van-icon name="arrow-left" />
        </div>
        <p>{{msg}}</p>
        <div class="right">
            <van-cell is-link @click="showPopup">
                <van-icon name="ellipsis" size="18" color="#fff"/>
            </van-cell>
            <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
                <div class="top">
                    <p @click="home">首页</p>
                    <p class="solid" @click="search">分类搜索</p>
                    <p class="solid" @click="buycar">购物车</p>
                </div>
                <div class="bottom">
                    <p @click="close">取消</p>
                </div>
            </van-popup>
        </div>
    </div>
</template>

<script>
export default {
    name:'navbar',
    props:{
        msg:String
    },
    data(){
        return{
            show:false, 
        }
    },
    methods:{
        showPopup(){
            this.show=true
        },
        back(){
            this.$router.go(-1)
        },
        close(){
            this.show=!this.show
        },
        home(){
            this.$router.push('/')
        },
        buycar(){
            this.$router.push('/buycar')
        },
        search(){
            this.$router.push('/classify')
        }
    }
}
</script>

<style scoped>
    .head{
        position: fixed;
        top: 0;
        z-index: 444;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .48rem;
        color: #fff;
        padding: 0 .4rem;
        box-sizing: border-box;
        background-color:#ff6600;
    }
    .head .right .van-cell{
        padding-right: .4rem ;
        background-color: #ff6600;
        text-align: center;
    }
    .head .right .van-cell .van-cell__right-icon{
        display: none;
    }
    .head .van-popup{
        text-align: center;
        background-color: #efeff4;
        color: #353535;
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
</style>