<template>
  <div id="cooperate">
    <mt-cell title="骑手招募"
     to="/riderrecruit" is-link>
      <img slot="icon">
    </mt-cell>
    <mt-cell title="商家合作"
     to="/merchantssettled" is-link>
      <img slot="icon">
    </mt-cell>
  </div>
</template>

<script>
  export default {
    name: "Cooperate"
  }
</script>

<style>
  #cooperate {
    border-radius: 5px;
    border-bottom: 10px solid #f6f6f6;
  }
</style>