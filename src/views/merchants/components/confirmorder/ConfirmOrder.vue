<template>
  <div id="ConfirmOrder">
    <OnePageScroll class="scroll">
      <span slot="centerword">确认订单</span>
      <ul class="confirm-list">
        <li class="confirm-addr" @click="chooseAddr">
          <div v-if="!temp">
            <span>选择收货地址</span>
            <img src="~assets/img/common/to.png">  
          </div>
          <div v-if="temp" class="confirm-addr-detail">
            <span class="addrInfo">{{temp.address}}</span>
            <span class="addremark">{{temp.name + ' ' + temp.tel}}</span>
          </div>
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
      <p class="wait">待支付 ¥</p>
      <!-- checkoutData.cart.total -->
      <p class="pay" @click="payClick">确认下单</p>
    </section>

    <AddrPop ref="addrPop" @addrReturn="addrReturn" :addrData="addData"></AddrPop>

  </div>
</template>

<script>
  import OnePageScroll from "components/content/onepagescroll/OnePageScroll"
  import AddrPop from "components/content/addrpop/AddrPop"
   

  export default {
    name: "ConfirmOrder",
    components: {
      OnePageScroll,
      AddrPop
    },
    data() {
      return {
        addData:[
          {
            address: '竹园',
            name: '曹凯晖',
            tel: 1452148454,
          },
          {
            address: '李园',
            name: '张三',
            tel: 1452148454,
          },
          {
            address: '桃园',
            name: '李四',
            tel: 1452148454,
          },
        ],
        temp: undefined,
      }
    },
    methods: {
      chooseAddr() {
        this.$refs.addrPop.addrChoose();
      },
      secondLine(item) {
        return item.name +' '+ item.tel
      },
      handleModify(item) {
        this.temp = Object.assign({}, item)
        this.popupVisible = true
      },
      addrReturn(item) {
        // console.log(item)
        // 获取地址
        this.temp = Object.assign({}, item)
      },
      payClick() {
        this.$router.push('/orderDetails')
      }
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
    margin-top: 0.5rem;
    height: 5rem;
    line-height: 5rem;
    color: #cccccc;
  }
  .confirm-addr img {
    height: 0.8rem;
  }
  .confirm-addr-detail {
    height: 4rem;
    flex-wrap: wrap;
    /* background:blueviolet; */
  }
  .addrInfo {
    display: block;
    height: 3rem;
    line-height: 3.8rem;
    color: #000000;
  }
  .addremark {
    display: block;
    font-size: 12px;
    height: 1rem;
    line-height: 1rem;
    color: #000000;
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
    background-color: #000000;
    flex: 5;
    padding-left: .7rem;
    color:white;
  }
  .confirm_order .pay {
    flex: 2;
    background-color: var(--color-theme);
    text-align: center;
    color: white;
  }
  .chooseAddrPop {
    width: 100%;
    height: 60%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .chooseAddrPop img {
    height: 24px;
  }
  .chooseAddrPop .popTitle {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    margin-bottom: 10px;
  }
</style>