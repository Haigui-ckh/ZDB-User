<template>
  <div id="order-list">
    <!-- 订单列表 -->
    <order-item :oType="orderType"/>
    <order-item :oType="orderType"/>
    <order-item :oType="orderType"/>
    <order-item :oType="orderType"/>

  </div>
</template>

<script>
  import OrderItem from './OrderItem'
  export default {
    name: "OrderList",
    components: {
      OrderItem
    },
    props: {
      orderType: Number   //当前订单类型
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>