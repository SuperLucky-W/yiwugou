<template>
  <div class="detail">
    <div class="head">
      <div class="wrap">
        <van-icon name="arrow-left" @click="back" />
        <van-icon name="shopping-cart-o" @click="buycar" />
      </div>
    </div>
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#ff6600">
        <van-swipe-item>
          <div
            :style="
              'background-image:url(https://img1.yiwugou.com/' +
              content.picture +
              ');'
            "
          ></div>
        </van-swipe-item>
        <van-swipe-item>
          <div
            :style="
              'background-image:url(https://img1.yiwugou.com/' +
              content.picture1 +
              ');'
            "
          ></div>
        </van-swipe-item>
        <van-swipe-item>
          <div
            :style="
              'background-image:url(https://img1.yiwugou.com/' +
              content.picture2 +
              ');'
            "
          ></div>
        </van-swipe-item>
        <van-swipe-item>
          <div
            :style="
              'background-image:url(https://img1.yiwugou.com/' +
              content.picture3 +
              ');'
            "
          ></div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="content">
      <div class="title">{{ content.title }}</div>
      <div class="price-type">
        <div class="range-price-item">
          <div class="start-number">
            {{ content.startNumber }}{{ content.metric }} 起批
          </div>
          <div class="price-desc">
            ¥<span class="price">{{
              parseFloat(content.sellPrice / 100).toFixed(2)
            }}</span>
          </div>
        </div>
        <div class="range-price-item">
          <div class="start-number">
            {{ content.startNumber1 }} - {{ content.endNumber1
            }}{{ content.metric }}
          </div>
          <div class="price-desc">
            ¥<span class="price">{{
              parseFloat(content.sellPrice1 / 100).toFixed(2)
            }}</span>
          </div>
        </div>
        <div class="range-price-item">
          <div class="start-number">≥ {{ content.startNumber2 }}</div>
          <div class="price-desc">
            ¥<span class="price">{{
              parseFloat(content.sellPrice2 / 100).toFixed(2)
            }}</span>
          </div>
        </div>
      </div>
      <div class="extra-con">
        <div class="stock">
          供货量 {{ content.saleNumber }}{{ content.metric }}
        </div>
        <div class="freight">
          <div class="freight-panel">
            <span>{{
              content.defaultfreight
                ? "发往浙江¥" + content.defaultfreight
                : "与商家商议"
            }}</span>
          </div>
        </div>
      </div>
      <div class="delivery-promise">
        <span>发货时效：72小时内发货</span>
      </div>
      <div class="panel rate">
        <div class="rate_title">
          <span>订单评价 (0)</span>
          <a href="#">
            查看全部
            <van-icon name="arrow" />
          </a>
        </div>
        <div class="rate_content">
          <div class="noData">暂无评价</div>
        </div>
      </div>
      <div class="panel">
        <div class="shop-con">
          <div class="left">
            <img :src="content.pictureUrlA" />
          </div>
          <div class="right">
            <div class="shop-name">{{ content.shopName }}</div>
            <div class="shop-address">地址：{{ content.marketInfo }}</div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="intro">{{ content.introduction }}</div>
      </div>
      <div class="panel">
        <div class="detail-title">商品详情</div>
        <div class="detail-content" v-html="content.detaill"></div>
      </div>
    </div>
    <lists class="list"></lists>
    <buy :list="content"></buy>
  </div>
</template>

<script>
import lists from "../components/lists";
import buy from "../components/buy";
export default {
  name: "detail",
  components: {
    lists,
    buy,
  },
  data() {
    return {
      content: {},
    };
  },
  watch: {
    $route: {
      handler(to, from) {
        // console.log(to.params.id, from);
        // console.log(document.body.scrollTop);
        const id = to.params.id;
         this.axios
        .get("http://localhost:3000/detail/" + id)
        .then((res) => {
            // console.log(res.data.data[0]);
            this.content = res.data.data[0];
            // console.log(this.content);
        })
        .catch((err) => {
            console.log(err);
        });
      },
      immediate: true,
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    buycar() {
      this.$router.push("/buycar");
    },
  },
};
</script>

<style scoped>
.detail {
  position: relative;
}
.detail > .head {
  width: 100%;
  position: fixed;
  top: 0.4rem;
  z-index: 999;
}
.detail > .head .wrap {
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
}
.detail > .head .wrap .van-icon {
  width: 0.666667rem;
  height: 0.666667rem;
  border-radius: 50%;
  text-align: center;
  line-height: 0.666667rem;
  font-size: 0.533333rem;
  color: #eee;
  background-color: rgba(0, 0, 0, 0.5);
}
/* 轮播图 */
.detail .swiper {
  width: 100%;
  height: 10rem;
  text-align: center;
  overflow: hidden;
  background-color: #f8f8f8;
}
.detail .swiper .van-swipe-item > div {
  height: 10.002667rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
}

/* 商品详情 */
.detail .content {
  font-size: 0.32rem;
  color: #999;
  background-color: #eee;
}
.detail .content .title {
  position: relative;
  padding: 0.213333rem 3%;
  font-size: 0.373333rem;
  color: #333;
  line-height: 150%;
  background-color: #fff;
}
.detail .content .price-type,
.detail .content .extra-con,
.detail .content .delivery-promise {
  background-color: #fff;
  position: relative;
  padding: 0.213333rem 3%;
}
.detail .content .title:after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #e5e5e5;
  color: #e5e5e5;
  transform-origin: 0 100%;
  transform: scaleY(0.5);
}
.detail .content .extra-con::before,
.detail .content .delivery-promise::before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #e5e5e5;
  color: #e5e5e5;
  transform-origin: 0 0;
  transform: scaleY(0.5);
}
.detail .content .price-type {
  display: flex;
  justify-content: space-between;
}
.detail .content .price-type .price-desc {
  padding-top: 0.053333rem;
  color: #ff6600;
}
.detail .content .price-type .price-desc .price {
  font-size: 0.533333rem;
}

.detail .content .extra-con {
  display: flex;
  justify-content: space-between;
}

.detail .content .rate {
  padding: 0 3%;
  line-height: 0.8rem;
  background-color: #fff;
  margin-top: 0.266667rem;
}
.detail .content .rate .rate_title {
  display: flex;
  justify-content: space-between;
}
.detail .content .rate .rate_title a {
  vertical-align: middle;
  /* line-height: .426667rem; */
  font-size: 0.32rem;
  color: #ff6600;
  border: 1px solid transparent;
  box-sizing: border-box;
}
.detail .content .rate .rate_title a .van-icon {
  padding-top: 0.206667rem;
  box-sizing: border-box;
}
.detail .content .rate .rate_content {
  line-height: 0.533333rem;
  padding-bottom: 0.266667rem;
  text-align: center;
}

.detail .panel {
  background: #fff;
  padding: 0 3%;
  margin-bottom: 0.266667rem;
  font-size: 12px;
  color: #999;
}

.detail .panel .shop-con {
  padding: 0.266667rem 0;
  display: flex;
}
.detail .panel .shop-con .left {
  /* width: 1.6rem; */
  height: 1.333333rem;
  overflow: hidden;
}
.detail .panel .shop-con .left img {
  width: 1.333333rem;
  margin-right: 0.266667rem;
  height: 100%;
  border-radius: 8%;
}
.detail .panel .shop-con .right {
  -webkit-box-flex: 1;
  flex: 1;
  line-height: 16px;
  overflow: hidden;
  color: #999;
  font-size: 12px;
}
.detail .panel .shop-con .right .shop-name {
  margin-top: 8px;
  line-height: 18px;
  margin-bottom: 4px;
  font-size: 15px;
  color: #333;
}
.detail .panel .intro,
.detail .panel .detail-content {
  padding: 0.266667rem 0;
  box-sizing: border-box;
  width: 100%;
}
.detail .panel .detail-content p img {
  width: 100%;
}

.detail .panel .detail-title {
  padding: 0.266667rem 0;
  text-align: center;
}
/* item商品 */
.list {
  padding-bottom: 1.333333rem;
}
</style>