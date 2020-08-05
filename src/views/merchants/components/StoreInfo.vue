<template>
  <div id="store-info">
    <div class="store-picture">
      <img src="~assets/img/store/s2.jpg">
    </div>
    <div class="store-name">日本料理寿司</div>
  </div>
</template>

<script>
  export default {
    name: "StoreInfo",
    props: {
      //头像、名字
    }
  }
</script>

<style scoped>
  #store-info {
    height: 68px;
    padding: 20px 18px;
    display: flex;
    background-color: #f6f6f6;
  }
  .store-picture {
    height: 60px;
    width: 60px;
    background-color: tan;
    overflow: hidden;

  }
  .store-picture img {
    height: 100%;
  }
  .store-name {
    padding: 20px 15px;
    height: 20px;
    font-size: 16px ;
    overflow: hidden;
  }
</style>