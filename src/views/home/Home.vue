<template>

  <div id="home">
    <!-- 顶部navbar -->
    <nav-bar class="home-navbar"><div slot="center">整点巴</div></nav-bar>
    <scroll class="home-scroll">
      <search class="home-search"></search>
      <home-swiper></home-swiper>
      <show-service></show-service>           <!-- 营销配置，快递服务等 -->             
      <function-list></function-list>         <!-- 功能区 --><!-- 项目需求中要求可自由增添或删减 -->    
      
      <advs></advs>                           <!-- 广告条部分 -->   
      <daily-special 
      :specialGoods="[{name: '西瓜'},{name: '可乐'},{name: '酸辣粉'},{name: '奶茶'}]">
      </daily-special>                        <!-- 天天特价 -->
      <recommend-store></recommend-store>     <!-- 推荐店铺 -->
      <store-list :stores="[{name: '重庆鸡公煲'}, {name: '小龙坎火锅'}, {name: '古茗'}]"/>
      <ul style="color:white">
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
      </ul>
    
    </scroll>


  </div>


</template>

<script>
  // 公共组件
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  // home内部子组件
  import HomeSwiper from './childComps/HomeSwiper'
  import Search from './childComps/Search'
  import ShowService from './childComps/ShowService'
  import Advs from './childComps/Advs'
  import DailySpecial from './childComps/DailySpecial'
  import RecommendStore from './childComps/RecommendStore'
  import FunctionList from './childComps/FunctionList'
  import StoreListItem from './childComps/storelist/StoreListItem'
  import StoreList from './childComps/storelist/StoreList'


  export default {
    name: "Home",
    components: {
      NavBar,
      Scroll,
      Search,
      HomeSwiper,
      ShowService,
      Advs,
      DailySpecial, 
      RecommendStore, 
      FunctionList,
      StoreListItem,
      StoreList,
    },
    data () {
    return {}
    },
    methods:{
    }
  }
</script>

<style scoped>
  .home-navbar {
    background-color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 60;
  }
  .home-search {
    margin-top: 44px;
  }
  .home-scroll {
    position: absolute;
    /* height: 300px; */
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
</style>