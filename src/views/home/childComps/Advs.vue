<template> 
  <div id="advs">
    <!-- <span>广告展示</span> -->
    <comps-title>广告展示</comps-title>
    <!-- <slot></slot> -->
    <div class="advs-item">
      <a href="#">
        <img src="~assets/img/advs/campus1.png">
      </a>
    </div>
    <div class="advs-item">
      <a href="#">
        <img src="~assets/img/advs/campus1.png">
      </a>
    </div>
  </div>
</template>

<script>
  import CompsTitle from './common/CompsTitle'
  export default {
    name: "Advs",
    components: {
      CompsTitle
    }
  }
</script>

<style scoped>
  #advs{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  #advs span{
    border-top:3px solid orange;
    padding: 5px;
    margin-left:  10px;
    font-size: 14px;
  }
  .advs-item img{
    width: 100%;
  }
</style>