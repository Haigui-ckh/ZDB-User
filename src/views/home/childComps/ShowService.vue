<template>
  <div id="showservice" @click="serClick">
    <div class="showservice-item">
      <div>
        <img src="~assets/img/showservice/a.png" width="47px" height="47px">
      </div>
      <div>快递服务</div>
    </div>
    <div class="showservice-item">
      <div>
        <img src="~assets/img/showservice/a.png" width="47px" height="47px">
      </div>
      <div>快递服务</div>
    </div>
    <div class="showservice-item">
      <div>
        <img src="~assets/img/showservice/a.png" width="47px" height="47px">
      </div>
      <div>快递服务</div>
    </div>
    <div class="showservice-item">
      <div>
        <img src="~assets/img/showservice/a.png" width="47px" height="47px">
      </div>
      <div>快递服务</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShowService",
    methods: {
    serClick() {
      console.log("serclick")
    }
  }
  }
</script>

<style scoped>
  #showservice{
    display: flex;
    flex-wrap:wrap;
    margin: 0 5%;
  }
  .showservice-item{
    width: 49%;
    height: 5rem;
    display: flex;
    line-height: 5rem;
    color: orange;
  }

  .showservice-item img{
    margin: 1rem;
  }
</style>