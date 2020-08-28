<template>
  <div id="rider-order">
    <back-nav>
      <div slot="center-word">骑手中心</div>
    </back-nav>
    <tab-control  class="order-tabcontrol"
                  :titles="['待接单','取单中','送单中','业绩统计']" 
                  @tabClick="tabClick"/>    
    <!-- 骑手订单 -->
    <scroll class="order-scroll">
      <div class="order-record" v-if="currentIndex === 3">
        <div class="order-volume">单量：</div>
        <div class="order-amount">薪资余额：</div>
      </div>
      <rider-order-list :orderType="currentIndex"></rider-order-list>
    </scroll>
  </div>
</template>

<script>
  import BackNav from "components/content/backnav/BackNav"
  import TabControl from "components/content/tabcontrol/TabControl";
  import Scroll from "components/common/scroll/Scroll"

  import RiderOrderList from "./RiderOrderList"
  export default {
    name: "RiderOrder",
    components: {
      BackNav,
      TabControl,
      Scroll,
      RiderOrderList
    },
    data() {
      return{     
        currentIndex: 0
      }
    },
    methods: {
      tabClick(index) {
        this.currentIndex = index;
      }
    }
  }
</script>

<style scoped>
  .order-scroll {
    position: absolute;
    top: 84px;
    bottom: 0;
    width: 100%;
    z-index: 9;
    background-color: white;
  }
  .order-record {
    display: flex;
    width: 90%;
    margin: 0 auto;
    height: 4rem;
    line-height: 4rem;
  }
  .order-volume {
    flex: 1;
  }
  .order-amount {
    flex: 1;
  }
</style>