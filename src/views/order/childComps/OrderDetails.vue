<template>
  <div>
    <OnePageScroll class="scroll">
      <span slot="centerword">订单详情</span>
      <ul class="detail-list">
        <li>
          <ul class="detail-info-container">
            <div class="info-title">
              配送信息
            </div>
            <li>
              <span>配送地址</span>
              <div>具体的地址信息</div>
            </li>
          </ul>
        </li>
        <li>
          <ul class="detail-info-container">
            <div class="info-title">
              商品名称
            </div>
            <li>
              <span>总计</span>
              <div>10元</div>
            </li>
            <div class="payItem"> 
              <button @click="pay">支付</button>
            </div>
            
            <!-- <li class="contactBtn">
              <button>联系客服</button>
              <button>致电骑手</button>
            </li> -->
          </ul>

        </li>
        <li>
          <ul class="detail-info-container">
            <div class="info-title">商品信息</div>
            <li>
              <span>取件信息</span>
              <div>具体信息</div>
            </li>
            <li>
              <span>备注信息</span>
              <div>具体信息</div>
            </li>
            <li>
              <span>附图</span>
              <div>具体信息</div>
            </li>
            <li>
              <span>规格</span>
              <div>具体信息</div>
            </li>
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
  components: {
    OnePageScroll,
  },
  data() {
    return {
      orderInfo: {
        
      },
    }
  },
  methods: {
    pay() {
      this.$router.push('/pay')
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
  }
  .contactBtn button{
    flex: 1;
    font-size: 14px;
    height: 40px;
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