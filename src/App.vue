<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>


<script>

  import MainTabBar from 'components/content/MainTabBar/MainTabBar' //底部tabbar
  

  export default{
    name: 'App',
    components: {
      MainTabBar
    }
  }

</script>

<style>
  @import "assets/css/base.css";

</style>
