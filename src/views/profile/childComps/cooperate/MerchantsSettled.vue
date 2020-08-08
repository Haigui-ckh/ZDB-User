<template>
<scroll class="sc">
  <back-nav>
    <div slot="center-word">商家入驻</div>
  </back-nav>
  <div id="merchants-settled">
    <div class="banner">
      商家界面入口
    </div>
    <tab-control :titles="['']"/>
  </div>
  <!-- <ul style="color:white">
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
      <li>zdb</li>
    </ul> -->
</scroll>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll"
  
  import BackNav from "components/content/backnav/BackNav"
  import TabControl from "components/content/tabcontrol/TabControl"

  // 商家入驻申请页面
  export default {
    name: "MerchantsSettled",
    components: {
      BackNav,
      Scroll,
      TabControl      
    }
  }
</script>

<style scoped>
  .merchants-settled {
    background-color: violet;
  }
  .sc {
    position:absolute;
    top:0px ;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 9;
    background-color: white;
  }
  .banner {
    height: 200px;
    width: 100%;
    background-color: tan;
  }
</style>