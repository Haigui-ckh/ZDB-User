<template>
  <div id="rider-order-content">
    <ul class="rider-order-list">
      <li class="list-item">
        <div class="item-head">
          <img src="~assets/img/profile/tx1.jpg">
        </div>
        <div class="item-main">
          <div class="item-title">取件码为 458758的快递</div>
          <div class="time">
            <span>2020/8/6</span>
          </div>
          <div class="item-field">
            <span>取件地址 :</span>
            <div>example</div>
          </div>
          <div class="item-field">
            <span>送达地址 :</span>
            <div>example</div>
          </div>
          <div class="item-field">
            <span>用户名 :</span>
            <div>example</div>
          </div>
          <div class="item-field">
            <span>用户手机号 :</span>
            <div>example</div>
          </div>
          <div class="item-field">
            <span>备注 :</span>
            <div>example</div>
          </div>
          <button class="take-order" v-if="orderType == 0">接单</button>
          <button class="take-order" v-if="orderType == 1">已取单</button>
          <button class="take-order" v-if="orderType == 2">已送到</button>
        </div>
      </li>
      <li class="list-item">
        <div class="item-head">
          <img src="~assets/img/profile/tx1.jpg">
        </div>
        <div class="item-main">
          <div class="item-title">食堂的一荤一素</div>
          <div class="time">
            <span>2020/8/6</span>
          </div>
          <div class="item-field">
            <span>取件地址 :</span>
            <div>云南省大理白族自治州大理市兴盛小区七栋501</div>
          </div>
          <div class="item-field">
            <span>送达地址 :</span>
            <div>example</div>
          </div>
          <div class="item-field">
            <span>用户名 :</span>
            <div>example</div>
          </div>
          <div class="item-field">
            <span>用户手机号 :</span>
            <div>example</div>
          </div>
          <div class="item-field">
            <span>备注 :</span>
            <div>example</div>
          </div>
          <button class="take-order" v-if="orderType == 0">接单</button>
          <button class="take-order" v-if="orderType == 1">已取单</button>
          <button class="take-order" v-if="orderType == 2">已送到</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "RiderOrderList",
    props: {
      orderType:Number
    }
  }
</script>

<style scoped>
  #rider-order-content {
    padding: 5%;
    height: 90%;
    width: 90%;
  }
  .rider-order-list {
    list-style: none;
    padding-left: 0px ;
  }
  .list-item {
    display: flex;
    border-bottom: 1px solid rgba(255,165,0,0.3);
    border-radius: 6px;
    padding:5px 0 30px 0;
    margin-bottom: 15px;
  }
  .item-title {
    font-size: 14px;
    padding-bottom: 10px;
  }
  .item-head {
    width: 10%;
    margin-right: 15px;
  }
  .item-head img {
    width: 100%;
    border-radius: 50% ;
  }
  .item-main {
    font-size: 10px;
    width: 60%;
  }
  .time {
    position: fixed;
    right: 15%;
    color: #737373;
  }
  .item-field {
    display: flex;
    width: 100%;
    margin-bottom: 10px;
  }
  .item-field span {
    color:#737373;
    width: 28%;
     }
  .item-field div{
    width: 70%;
    
    }
  .take-order {
    position: absolute;
    right: 15%;
    width: 60px;
    height: 22px;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    background-color:#ffcc66	;
  }


</style>