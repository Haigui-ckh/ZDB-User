<template>
  <div id="order-list">
    <!-- 订单列表 -->
    <div class="order-item">
      <p class="order-name">香辣鸡腿堡</p>
      <p>￥15元</p>
      <p>
        <span>下单时间：</span>2020/8/4  15:00
      </p>
      <p>
        <span>骑手电话：</span>18495486515
        <span id="contact-platform" @click="contactpaltform">联系平台</span>
      </p>
      <div class="order-deal" v-if="orderType === 0" @click="cancelOrder(oid)">取消订单</div>
      <div class="order-deal" v-if="orderType === 2" @click="goComment(orderType)">评价</div>
    </div>
    <div class="order-item">
      <p class="order-name">香辣鸡腿堡</p>
      <p>￥15元</p>
      <p>
        <span>下单时间：</span>2020/8/4  15:00
      </p>
      <p>
        <span>骑手电话：</span>18495486515
        <span id="contact-platform" @click="contactpaltform">联系平台</span>
      </p>
      <div class="order-deal" v-if="orderType === 0" @click="cancelOrder(oid)">取消订单</div>
      <div class="order-deal" v-if="orderType === 2" @click="goComment(orderType)">评价</div>
    </div>
    <div class="order-item">
      <p class="order-name">香辣鸡腿堡</p>
      <p>￥15元</p>
      <p>
        <span>下单时间：</span>2020/8/4  15:00
      </p>
      <p>
        <span>骑手电话：</span>18495486515
        <span id="contact-platform" @click="contactpaltform">联系平台</span>
      </p>
      <div class="order-deal" v-if="orderType === 0" @click="cancelOrder(oid)">取消订单</div>
      <div class="order-deal" v-if="orderType === 2" @click="goComment(orderType)">评价</div>
    </div>
    <div class="order-item">
      <p class="order-name">香辣鸡腿堡</p>
      <p>￥15元</p>
      <p>
        <span>下单时间：</span>2020/8/4  15:00
      </p>
      <p>
        <span>骑手电话：</span>18495486515
        <span id="contact-platform" @click="contactpaltform">联系平台</span>
      </p>
      <div class="order-deal" v-if="orderType === 0" @click="cancelOrder(oid)">取消订单</div>
      <div class="order-deal" v-if="orderType === 2" @click="goComment(orderType)">评价</div>
    </div>
  </div>
</template>

<script>
  import OrderItem from './OrderItem'

  export default {
    name: "OrderList",
    data() {
      return {
        oid: 0
      }
    },
    props: {
      orderType: Number   //当前订单类型
    },
    methods: {
      contactpaltform() {
        // 跳转到信息中心
        this.$router.push('/message')
      },
      goComment(type) {
          this.$router.push({
          path:'/ordercomment',
          query: {'ordertype': type}
          })
      },
      cancelOrder(oid) {
        // 发送到order处理
        this.$emit('cancelOrder',oid)
      }
    }
  }
</script>

<style scoped>
  #order-list {
    position: relative;
  }
  .order-item{
    width: 90%;
    margin: 5px auto;
    padding:5px 5px 35px 5px;
    border-radius: 5px;
    font-size: 12px;
    border-bottom: 2px solid orange;;
  }
  #contact-platform {
    color: orange;
    margin-left: 10px;
  }
  .order-item span {
    color: #737373;
  }
  .order-name {
    font-size: 16px;
    overflow: hidden;
  }

  .order-deal {
    border: 1px solid orange;
    color: orange;
    width: 80px;
    text-align: center;
    border-radius: 5px;
    font-size: 12px;
    padding: 4px;
    position: absolute;
    right: 25px;
  }  
</style>