<template>
  <div id="profile">
    <nav-bar>
      <div slot="center">我的</div>
    </nav-bar>
    <personal-data></personal-data>
    <cooperate></cooperate>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import PersonalData from './childComps/PersonalData'
  import Cooperate from './childComps/Cooperate'

  export default {
    name: "Profile",
    components: {
      NavBar,
      PersonalData,
      Cooperate
    },
    data () {
    return {}
    },
    methods:{}
  }
  </script>

<style scoped>
  /* #profile {
    background:#f6f6f6;
  } */
</style>