<template>
  <div>
    <div class="order-item">
      <p class="order-name">香辣鸡腿堡</p>
      <a>查看详情</a>
      <p>￥15元</p>
      <p>
        <span>下单时间：</span>2020/8/4  15:00
      </p>
      <p>
        <span>骑手电话：</span>18495486515
        <span id="contact-platform" @click="contactpaltform">联系平台</span>
      </p>
      <div class="order-deal" v-if="oType === 0" @click="cancelClick(oid)">取消订单</div>
      <div class="order-deal" v-if="oType === 2" @click="goComment(orderType)">评价</div>
    </div>
    <confirm ref="cancelConfirm"/>
  </div>
</template>

<script>
  import Confirm from "components/common/confirm/Confirm"

  export default {
    name: "OrderItem",
    props: {
      oType: Number,    //tabbar使用
      oid: null
    },
    components: {
      Confirm
    },
    data() {
      return {
         orderType: 1 //分为外卖和快递订单
      }
    },
    methods: {
      contactpaltform() {
        // 跳转到信息中心
      },
      cancelClick(oid) {
        // this.oid = 1;
        this.$refs.cancelConfirm.show();

      },
      goComment(type) {
        this.$router.push({
          path:'/ordercomment',
          query: {'ordertype': type}
          })
      }
    }
  }
</script>

<style scoped>
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