<template>
  <div>
    <OnePageScroll class="scroll">
      <span slot="centerword">订单详情</span>
      <ul class="detail-list" v-if="orderType === 'takeout'">
        <li>
          <ul class="detail-info-container">
            <div class="info-title">
              配送信息
            </div>
            <li>
              <span>配送地址</span>
              <div>具体的地址信息</div>
            </li>
            <li>
              <span>联系电话</span>
              <div>14578459564</div>
            </li>
          </ul>
        </li>
        <li class="good-Info-container">
          <ul class="detail-info-container">
            <div class="info-title" @click="jumpStore">
              <span>商家名称</span>
              <img src="~assets/img/common/to.png">
            </div>
            <li>
              <span>商品名称+规格</span>
              <span>份数</span>
            </li>
            <li>
              <span>总计</span>
              <div>10元</div>
            </li>
            <div class="payItem"> 
              <button @click="pay">支付</button>
            </div>
          </ul>
          <div class="contactBtn">
            <div class="contactService">联系客服</div>
            <div class="contactRider">致电骑手</div>
          </div>
        </li>
        <li>
          <ul class="detail-info-container">
            <div class="info-title">配送信息</div>
            <li>
              <span>配送地址</span>
              <div>具体信息</div>
            </li>
            <li>
              <span>联系电话</span>
              <div>具体信息</div>
            </li>
            <li>
              <span>下单时间</span>
              <div>具体信息</div>
            </li>
            <!-- <li>
              <span>规格</span>
              <div>具体信息</div>
            </li> -->
          </ul>
        </li>
      </ul>

      <ul class="detail-list" v-if="orderType === 'delivery'">
        <li>
          <ul class="detail-info-container">
            <div class="info-title">配送信息</div>
            <li>
              <span>取件地址</span>
              <div>具体的地址信息</div>
            </li>
            <li>
              <span>姓名</span>
              <div>张三</div>
            </li>
            <li>
              <span>联系电话</span>
              <div>14578459564</div>
            </li>
            <li>
              <span>配送地址</span>
              <div>具体的地址信息</div>
            </li>
          </ul>
        </li>
        <li class="good-Info-container">
          <ul class="detail-info-container">
            <div class="info-title">
              <span>取件信息</span>
            </div>
            <li>
              <span>规格</span>
              <div>具体规格</div>
            </li>
            <li>
              <span>备注信息</span>
              <div>具体的备注信息</div>
            </li>
            <li>
              <span>附图</span>
              <div>具体的备注信息</div>
            </li>
            <div class="payItem"> 
              <button @click="pay">支付</button>
            </div>
          </ul>
          <div class="contactBtn">
            <div class="contactService">联系客服</div>
            <div class="contactRider">致电骑手</div>
          </div>
        </li>
        <li>
          <ul class="detail-info-container">
            <div class="info-title">订单信息</div>
            <li>
              <span>提交时间</span>
              <div>具体时间</div>
            </li>
            <li>
              <span>完成时间</span>
              <div>具体时间</div>
            </li>
            <!-- <li>
              <span>规格</span>
              <div>具体信息</div>
            </li> -->
          </ul>
        </li>
      </ul>
    </OnePageScroll>
  </div>
</template>

<script>
import OnePageScroll from "components/content/onepagescroll/OnePageScroll"

export default {
  name: "OrderDetails",
  props: {
    storeID: ''
  },
  components: {
    OnePageScroll,
  },
  data() {
    return {
      orderInfo: {
        
      },
      orderType: 'delivery'
    }
  },
  methods: {
    pay() {
      this.$router.push('/pay')
    },
    jumpStore() {
      // 配上storeid
      this.$router.push('/store')
    }
  }
}
</script>

<style scoped>
  .detail-list {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    width: 94%;
    margin-top: 10px;
  }
  .detail-list li {
    border-radius: 8px;
    background-color: white;
    margin-top: 15px;
  }
  .detail-info-container{
    padding: 0 0.8rem ;
  }
  .info-title {
    height: 44px;
    line-height: 44px;
    padding: 0 15px;
    border-bottom: 1px solid var(--color-border);
  }
  .info-title img {
    height: 40%;
    float: right;
    margin-top: 14px;
  }
  .detail-info-container li{
    display: flex;
    padding-left: 10px;
    margin-top: 8px;
    padding-bottom: 8px;
  }
  .detail-info-container li span{
    width: 30%;
    font-size: 14px;
    color: #cccccc;
  }
  .detail-info-container li div{
    text-align: right;
    padding-right: 15px;
    width: 70%;
  }
  .contactBtn {
    display: flex;
    flex: 1;
    font-size: 14px;
    width: 100%;   
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .contactBtn div{
    flex: 1;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #f2f2f2;
    background-color: #ffffff;
    text-align: center;
  }
  .contactService {
    border-right: 1px solid #EBEEF5;
  }
  .payItem {
    text-align: right;
    padding-bottom: 15px ;
  }
  .payItem button{
    height: 32px;
    width: 64px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    background-color: var(--color-theme);
    color:white;
    font-size: 14px;
  }
</style>