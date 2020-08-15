<template>
  <div id="Service">
    <back-nav destination="/home"></back-nav>
    <tab-control  class="order-tabcontrol"
                  :titles="['代取快递','代取文件','跑腿代购','代寄快递']" 
                  @tabClick="tabClick"/>
    
    <div class="service-content">
      <scroll>
        <router-view/>
      </scroll>
    </div>
    
  </div>
</template>

<script>
  import TabControl from "components/content/tabcontrol/TabControl";
  import Scroll from "components/common/scroll/Scroll"

  import BackNav from 'components/content/backnav/BackNav'
  


  export default {
    name: "Service",
    components: {
      TabControl,
      BackNav,
      Scroll
    },
    data() {
      return{
        jumpPath: ['/service/takedelivery','/service/takefile','/service/purchaseagent','/service/senddelivery'],
        activeid: 0
      }
    },
    methods: {
      tabClick(index) {
        this.$router.push(this.jumpPath[index])
      }
    }
  }
</script>

<style scoped>
  .service-content {
    position: absolute;
    height: 100%;
    top: 84px;
    bottom: 0px;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 9;
  }
</style>