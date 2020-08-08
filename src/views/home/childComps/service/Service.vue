<template>
  <div id="Service">
    <back-nav destination="/home"></back-nav>
    <tab-control  class="order-tabcontrol"
                  :titles="['代取快递','代取文件','跑腿代购','代寄快递']" 
                  @tabClick="tabClick"/>
    
    <div class="service-content">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
  import TabControl from "components/content/tabcontrol/TabControl";


  import BackNav from 'components/content/backnav/BackNav'
  


  export default {
    name: "Service",
    components: {
      TabControl,
      BackNav,
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