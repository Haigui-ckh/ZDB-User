<template>
  <div id="profile">
    <nav-bar>
      <div slot="center">我的</div>
    </nav-bar>
    <personal-data>

    </personal-data>
    <mt-cell title="我的资料"
      to="/myprofile" is-link>
    </mt-cell>  
    <div id="cooperate">
      <mt-cell title="骑手招募"
      to="/riderrecruit" is-link/>
      <mt-cell title="商家合作"
      to="/merchantssettled" is-link/>
    </div>    
    <div id="comment-center">
      <mt-cell title="评论中心"
      to="/commentcenter" is-link/>    
    </div>
    <div id="rider-order" v-if="rider==true">
      <mt-cell title="骑手订单区"
      to="/riderorder" is-link>
      </mt-cell>    
    </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  

  import PersonalData from "./childComps/PersonalData"
  import Cooperate from "./childComps/cooperate/Cooperate"
  import CommentCenter from "./childComps/comment/CommentCenter"

  export default {
    name: "Profile",
    components: {
      NavBar,
      PersonalData,
      Cooperate,
      CommentCenter
    },
    data () {
    return {
      rider: true
    }
    },
    methods:{}
  }
  </script>

<style scoped>

  #cooperate {
    border-radius: 5px;
    border-top: 10px solid #f6f6f6;
  }
  #comment-center {
    border-radius: 5px;
    border-top: 10px solid #f6f6f6;
  }
  #rider-order {
    border-radius: 5px;
    border-top: 10px solid #f6f6f6;
  }
</style>