<template>
  <div id="recommend-store">
    <comps-title>推荐店铺</comps-title>
    <!-- <slot></slot> -->
    <div class="rec-store-item">
      <img src="~assets/img/store/s1.png" alt="">
      <span>我是店铺名</span>
    </div>
    <div class="rec-store-item">
      <img src="~assets/img/store/s1.png" alt="">
      <span>我是店铺名</span>
    </div>
    <div class="rec-store-item">
      <img src="~assets/img/store/s1.png" alt="">
      <span>我是店铺名</span>
    </div>
    <div class="rec-store-item">
      <img src="~assets/img/store/s1.png" alt="">
      <span>我是店铺名</span>
    </div>
  </div>
</template>

<script>
  import CompsTitle from './common/CompsTitle'
  export default {
    name: "RecommendStore",
    components: {
      CompsTitle
    }
  }
</script>

<style scoped>
  #recommend-store {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /* background-color: whitesmoke; */
    margin-bottom: 20px;
  }
  .rec-store-item {
    width: 46%;
    margin: 5px auto;
    /* margin-bottom: 5px; */
    border-radius:5px;
    background-color:white ;
    font-size: 14px;
    
  }
  .rec-store-item img {
    width:100%;
    border-radius: 5px 5px 0 0;
  }
</style>