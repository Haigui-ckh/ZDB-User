<template>
  <div id="order">
    <nav-bar class="order-navbar">
      <div slot="center">我的订单</div>
    </nav-bar>
    <tab-control  class="order-tabcontrol"
                  :titles="['未付款','配送中','已完成']" 
                  @tabClick="tabClick"/>
    
    <scroll class="order-scroll">
      <order-list  :orderType="currentIndex" @cancelOrder="cancelOrder"/>
    </scroll>
    <confirm ref="Confirm"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabcontrol/TabControl";
  import Scroll from "components/common/scroll/Scroll"
  import Confirm from "components/common/confirm/Confirm"

  import OrderList from "./childComps/OrderList";

  export default {
    name: "Order",
    components: {
      NavBar,
      TabControl,
      Scroll,
      OrderList,
      Confirm
    },
    data() {
      return{     
        orders: {},
        currentIndex: 0
        }
      },
    methods: {
      /*
      * 事件监听方法
      */
      tabClick(index) {
        //从tab获取数组下标
        this.currentIndex = index;
      },
      cancelOrder(oid) {
        console.log('order中取消订单,订单号为' + oid)
        this.$refs.Confirm.show('确定取消此订单？',{
          titleText: '确认'
        });
      }
    }
  };
</script>

<style scoped>
  .order-navbar {
    background-color: white;
  }
  .order-tabcontrol {
    background:white;
  }
  .order-scroll {
    position: absolute;
    top: 84px;
    bottom: 49px;
    width: 100%;
    z-index: -1;
  }
</style>