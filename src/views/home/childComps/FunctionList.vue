<template>
  <div id="function-list">
    <div class="function-list-item">
      <img src="~assets/img/advs/f1.svg">
      <div>功能名</div>
    </div>
    <div class="function-list-item">
      <img src="~assets/img/advs/f1.svg">
      <div>功能名</div>
    </div>
    <div class="function-list-item">
      <img src="~assets/img/advs/f1.svg">
      <div>功能名</div>
    </div>
    <div class="function-list-item">
      <img src="~assets/img/advs/f1.svg">
      <div>功能名</div>
    </div>
    <div class="function-list-item">
      <img src="~assets/img/advs/f1.svg">
      <div>功能名</div>
    </div>
    <div class="function-list-item">
      <img src="~assets/img/advs/f1.svg">
      <div>功能名</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FunctionList"    
  }
</script>

<style scoped>
  #function-list {
    display: flex;
    flex-wrap: wrap;
    padding: 5%;
  }

  .function-list-item {
    width: 20%;
    text-align: center;
  }

  .function-list-item img {
    width:80%;
  }
</style>