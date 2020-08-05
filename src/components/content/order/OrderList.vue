<template>
  <div id="orders">
    <order-list-Item v-for="item in orders" :key="item" 
    :order-item="item/>
  </div>
</template>

<script>
  import OrderListItem from 'components/order/OrderListItem'

  export default {
    name: "OrderList",
    components: {
      OrderListItem
    },
    props: {
      orders: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
</style>