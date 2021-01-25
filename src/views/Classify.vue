<template>
  <div class="about">
    <div class="head">
      <div class="wrap">
        <van-icon name="arrow-left" @click="back"/>
        <div class="right">
          <input type="text" placeholder="请输入关键字">
          <van-icon name="search" />
        </div>
        
      </div>
      
    </div>
    <van-tree-select :items="items" :main-active-index.sync="items.id" @click-nav="getList">
      <template #content>
        <div class="wrapper">
          <div class="item" v-for="(item,index) in list" :key="index">
            <img :src="item.img">
            <p>{{item.type}}</p>
          </div>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import Foot from '../components/foot'
export default {
  name:'Classify',
  components:{
    Foot
  },
  data() {
    return {
      list:[],
      items: [
        { text: '化妆品',id:988 },
        { text: '地摊挑货',id:946 }, 
        { text: '玩具',id:22 }, 
        { text: '饰品' ,id:23}, 
        { text: '袜类',id:30 }, 
        { text: '厨卫',id:144 }, 
        { text: '服饰',id:28 },
        { text: '内衣' ,id:31},
        { text: '办公文教',id:323 },
        { text: '体育用品',id:26 },
        { text: '箱包',id:34 },
        { text: '宠物用品' ,id:939},
        { text: '帽类',id:379 },
        { text: '个护' ,id:873},
        { text: '喜庆用品' ,id:227},
        { text: '工艺品' ,id:25},
        { text: '母婴' ,id:863},
        { text: '百货' ,id:36},
        { text: '数码' ,id:874},
        { text: '汽车用品' ,id:892},
        { text: '小家电' ,id:37},
        { text: '鞋靴' ,id:33},
        { text: '机械' ,id:927},
        { text: '五金' ,id:35},
        { text: '医疗器械' ,id:979},
        { text: '配饰' ,id:24},
        { text: '辅料' ,id:27},
        { text: '熔喷' ,id:902},
        ],
    };
  },
  created(){
    this.getList(0)
  },
  methods:{
    getList(i){
      console.log(111,i)
      console.log(this.items[i].id)
      var id=this.items[i].id
      this.axios.get('http://localhost:3000/classify/'+id).then(res=>{
        console.log(res.data.data)
        this.list=[]
        this.list=this.list.concat(res.data.data)
      }).catch(err=>{
        console.log(err)
      })
    },
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .about .head>.wrap{
    background-color: #ff6600;
    display: flex;
    height: 1.333333rem;
    align-items: center;
    justify-content: space-between;
    padding: 0 .266667rem;
    font-size: .426667rem;
    color: #fff;
  }
  .about .head .wrap>.van-icon{
    margin-left: .133333rem;
  }
  .about .head .right{
    position: relative;
  }
  .about .head .right input{
    
    width: 8.433333rem;
    height: .846667rem;
    border-radius: .133333rem;
    outline: none;
    border: 1px solid transparent;
    text-indent: .233333rem;
  }
  .about .head .right .van-icon{
    position: absolute;
    right: 0;
    color: #aaa;
    font-size: .626667rem;
    top: 16%;
  }

  .van-tree-select{
    font-size: .32rem !important;
    height: 92vh !important;
  }
  .van-sidebar-item{
    font-size: .32rem;
  }
  .van-sidebar-item--select{
    color: #ff6600;
  }
  ::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }
   /* 内容 */
   .wrapper{
     padding: .533333rem .266667rem;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
   }
  .wrapper .item{
     width: 28%;
     text-align: center;
     margin-top: .533333rem;
   }
   .wrapper .item img{
     width: 100%;
     height: auto;
   }
</style>