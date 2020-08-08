<template>
  <div id="OnePageScroll">
    <back-nav>
      <div slot="center-word">
        <slot name="centerword"></slot>
      </div>
      <div slot="right-content">
        <slot name="rightword"></slot>
      </div>
    </back-nav>
    <scroll class="onepagesc">
      <slot></slot>
    </scroll>
  </div>
</template>

<script>
  import BackNav from "components/content/backnav/BackNav"
  import Scroll from "components/common/scroll/Scroll"
  export default {
    name: "OnePageScroll",
    components: {
        Scroll,
        BackNav
    }
  }
</script>

<style scoped>
  #OnePageScroll {
    position: absolute;
    top: 0px;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9;
    background-color: white;
  }
  .onepagesc {
    background-color: #f6f6f6;
    height: 100%;
  }
</style>