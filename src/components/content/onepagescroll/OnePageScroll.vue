<template>
  <div id="OnePageScroll">
    <back-nav class="backnav">
      <div slot="center-word">
        <slot name="centerword"></slot>
      </div>
      <div slot="right-content" @click="rightClick" class="navRight">
        <slot name="rightword"></slot>
      </div>
    </back-nav>
    <slot name="tab"></slot>
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
    },
    methods: {
      rightClick() {
        this.$emit("navRightClick")
      }
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
    position: absolute;
    right: 0;
    left: 0;
    background-color: #f6f6f6;
    height: 100%;
    z-index: -1;
  }
  .backnav {
    background: white;
  }
  .navRight {
    color: var(--color-theme);
  }
</style>