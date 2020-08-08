<template>
  <div id="ConfirmOrder">
    <OnePageScroll class="scroll">
      <span slot="centerword">确认订单</span>
      <ul class="confirm-list">
        <li class="confirm-addr">
          <span>选择收货地址</span>
          <img src="~assets/img/common/to.png">
        </li>
        <li class="confirm-prod">
          <div class="prod-info">
            商品信息
            <span>1元</span>  
          </div>
          <div>
            打包费
            <span>1元</span>
          </div>
          <div>
            配送费
            <span>1元</span>
          </div>
          <div>
            小计
            <span>1元</span>
          </div>
          </li>
        <li class="confirm-remarks">
          <div>备注</div>
          <textarea placeholder="在此输入备注"></textarea>
        </li>
      </ul>
    </OnePageScroll>
    <section class="confirm_order">
          <p class="wait">待支付 ¥{{}}</p>
          <!-- checkoutData.cart.total -->
          <p class="pay">确认下单</p>
          <!-- @click="confirmOrder"  -->
    </section>
  </div>
</template>

<script>
  import OnePageScroll from "components/content/onepagescroll/OnePageScroll"
  
  export default {
    name: "ConfirmOrder",
    components: {
      OnePageScroll
    },
    props: {

    },
    mounted() {
      
    }
  }
</script>

<style scoped>
  .confirm-list {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    width: 90%;
  }
  .confirm-list li {
    padding-left: 0.8rem;
    border-radius: 8px;
    background-color: white;
  }
  .confirm-addr {
    height: 4rem;
    line-height: 4rem;
    color: #cccccc;
  }
  .confirm-addr img {
    height: 0.8rem;
  }
  .confirm-prod {
    margin-top: 0.5rem;
  }
  .confirm-prod .prod-info {
    height: 4rem;
    line-height: 4rem;
  }
  .confirm-prod div{
    height: 3rem;
    line-height: 3rem;
    border-bottom: 1px solid var(--color-border);
  }
  .confirm-prod div span {
    float: right;
    margin-right: 0.5rem;
  }
  .confirm-remarks {
    margin-top: 0.5rem;
    padding-top: 0.5rem;
  }
  .confirm-remarks textarea {
    height: 4rem;
    width: 80%;
    margin-top: 0.5rem;
    border-radius: 0.3rem;
    border-color: #f2f2f2;
    font-size: 0.8rem;

  }
  .confirm_order {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3rem;
    background-color: violet;
    z-index: 10;
  }
  .confirm_order p{
    line-height: 3rem;
    height: 100%;
    margin-top: 0 ;
    /* color: white; */
  }
  .confirm_order .wait {
    background-color: #FFFFCC;
    flex: 5;
    padding-left: .7rem;
  }
  .confirm_order .pay {
    flex: 2;
    background-color: var(--color-theme);
    text-align: center;
    color: white;
  }
</style>