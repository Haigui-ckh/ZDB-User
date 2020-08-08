<template>
  <div id="back-nav">
    <nav-bar class="nav-bar">
      <div slot="left" @click="backClick"><img src="~assets/img/common/back.svg"></div>
      <div slot="center">
        <slot name="center-word"></slot>
      </div>
      <div slot="right">
        <slot name="right-content"></slot>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"

  export default {
    name: "BackNav",
    components: {
      NavBar
    },
    props: {
      destination: {
        default: null
      }
    },
    methods: {
      backClick() {
        if(this.destination){
          this.$router.push(this.destination);
        }
        else{
          this.$router.go(-1);
        }
        // this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  #back-nav {
    background-color: white;
  }
  .nav-bar {
    text-align: center;
  }
  .nav-bar img{
    width: 35%;
    margin-top: 10px ;
  }
</style>