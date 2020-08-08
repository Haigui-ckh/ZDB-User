<template>
  <div>    
    <back-nav destination="/home"></back-nav>
    <!--头部-->
    <store-info></store-info>
    <!--导航-->
    <app-nav :commentNum="commentNum"></app-nav>
    <!--内容-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

  import NavBar from "@/components/common/navbar/NavBar"
  import BackNav from "@/components/content/backnav/BackNav"

  import StoreInfo from "./components/StoreInfo"
  import Header from "./components/header/Header"
  import Nav from "./components/nav/Nav"
  import axios from "axios"

  export default {
    name: "Merchants",
    data() {
      return {
        poiInfo: {},
        commentNum: 0
      }
    },
    components: {
      "app-nav": Nav,
      "app-header": Header,
      StoreInfo,
      NavBar,
      BackNav
    },
    created() {
      axios({
        url: '/ratings.json'
      }).then(res => {
        this.comment_num = res.data.data.comment_num
      })
    }
  }
</script>

<style scoped>
  .nav-bar {
    text-align: center;
  }
  .nav-bar img{
    width: 35%;
    margin-top: 10px ;
  }
</style>