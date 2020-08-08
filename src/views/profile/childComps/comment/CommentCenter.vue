<template>
  <div id="comment-center">
    <back-nav>
      <div slot="center-word">评论中心</div>
    </back-nav>
    <tab-control  class="comment-tabcontrol"
              :titles="['个人评论','全部评论']" 
              @tabClick="tabClick"/>
    <comment-list></comment-list>
  </div>
</template>

<script>
  import TabControl from "components/content/tabcontrol/TabControl"
  import BackNav from "components/content/backnav/BackNav"
  import Scroll from "components/common/scroll/Scroll"

  import CommentList from "./CommentList"
  
  export default {
    name: "CommentCenter",
    components: {
      TabControl,
      BackNav,
      Scroll,
      CommentList
    },
    methods: {
      tabClick() {
        console.log('已点击')
      }
    }
  }
</script>

<style scoped>

</style>