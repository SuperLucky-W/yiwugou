<template>
  <div class="buy">
    <van-goods-action>
      <van-goods-action-icon icon="wap-home-o" text="首页" color="#ee0a24" />
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="shop-o" text="进店" color="#ff5000" />
      <!-- <van-goods-action-button type="warning" text="加入购物车" /> -->
      <van-goods-action-button
        @click="onClickButton"
        type="danger"
        text="加入购物车"
        
      />
    </van-goods-action>
    <!-- 弹窗 -->
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      class="s"
      @add-cart='car'
      @stepper-change='count'
    />
  </div>
</template>

<script>
export default {
  name: "buy",
  props:{
    list:{
      type:Object
    }
    },
  data() {
    return {
      lists:{
        title:'',
        count:'',
        img:'',
        user:''
      },
      show: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "规格", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "数量", // skuValueName：规格值名称
                imgUrl: "", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "", // 用于预览显示的规格类目图片
              }
            ],
            largeImageMode: false, //  是否展示大图模式
          },
        ],
        list: [
          {
            id: '', // skuId
            s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
            price: '', // 价格（单位分）
            stock_num: '' // 当前 sku 组合对应的库存
          }
        ],
        price: "", // 默认价格（单位元）
        stock_num: "", // 商品总库存
        none_sku: false, // 是否无规格商品
        hide_stock: false, // 是否隐藏剩余库存
      },
      goods: {
        // 数据结构见下方文档
        picture: ''
      },
      goodsId:{
        picture: ''
      },
    };
  },
  methods: {
    onClickButton() {
       console.log(this.list)
      console.log("点击按钮");
      this.show = true
      this.sku.price =  parseFloat(this.list.sellPrice / 100).toFixed(2)
      this.sku.stock_num = Number(this.list.saleNumber) 
      this.sku.tree[0].v.imgUrl = 'https://img1.yiwugou.com/' +this.list.picture
      this.sku.tree[0].v.previewImgUrl = 'https://img1.yiwugou.com/' +this.list.picture
      this.sku.list[0].price = parseFloat(this.list.sellPrice2).toFixed(2)
      this.sku.list[0].stock_num = Number(parseFloat(this.list.saleNumber/4).toFixed(0)) 
      this.sku.list[0].id = this.list.id
      this.goods.picture='https://img1.yiwugou.com/' +this.list.picture
      this.goodsId.picture='https://img1.yiwugou.com/' +this.list.picture
    },
    car(i){
      // console.log(111,localStorage.getItem('tel'))
      this.lists.user=localStorage.getItem('tel')
      this.lists.title=this.list.title
      // console.log(i)
      this.lists.img='https://img1.yiwugou.com/' +this.list.picture
      this.lists.price=parseFloat(this.list.sellPrice2/100).toFixed(2)
      console.log(this.lists)
       this.setData(JSON.stringify(this.lists))
    },
    count(i){
      // console.log(i)
      this.lists.count=i
     
    },
    setData(i){
      this.axios.get('http://localhost:3000/buycar',
        {
          params:{
            i
          }
        }
      ).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    }
  },
};
</script>

<style scoped>
.buy {
  position: fixed;
  bottom: 0;
}
</style>