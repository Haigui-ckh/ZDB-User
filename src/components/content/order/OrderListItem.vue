<template>
  <div></div>
</template>

<script>
export default {
  name: "OrderListItem",
  props: {
    orderItem: {
      type: Object,    //单个订单传送形式不确定
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
</style>