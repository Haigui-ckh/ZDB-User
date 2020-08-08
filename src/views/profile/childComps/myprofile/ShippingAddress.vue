<template>
  <div id="shippingaddress">
    <OnePageScroll>
      <span slot="centerword">我的地址</span>
      <span slot="rightword" class="newAddr" @click="newAdd">新增</span>
      <ul class="address-list">
        <li>地址1</li>
        <li>地址2</li>
        <li>地址3</li>

      </ul>
    </OnePageScroll>
  </div>
</template>

<script>
  import OnePageScroll from "components/content/onepagescroll/OnePageScroll"
  export default {
    name: "ShippingAddress",
    components: {
      OnePageScroll
    },
    methods: {
      newAdd() {
        this.$router.push('/newadd')
      }
    }
  }
</script>

<style scoped>
  .address-list {
    margin: 0;
    padding: 0;
  }
  .address-list li {
    height: 3rem;
    line-height: 3rem;
    background-color: violet;
  }
  .newAddr {
    color: var(--color-theme);
  }
</style>