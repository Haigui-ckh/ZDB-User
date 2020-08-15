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
          <p class="pay">确认下单</p>
          <!-- @click="confirmOrder"  -->
    </section>

    <mt-popup
    v-model="popupVisible"
    position="bottom"
    class="chooseAddrPop">
      <div class="popTitle">
        <span>选择收货地址</span>
      </div>
      <mt-cell v-for="(item,index) in addData" :key="index"  :title="item.address" :label="secondLine(item)" @click.native="addrClick(item)">
        <img src="~@/assets/img/profile/modify.svg" @click="handleModify(item)">
      </mt-cell>
    </mt-popup>
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
    data() {
      return {
        popupVisible: false,
        addData:[
          {
            address: '竹园',
            person: '曹凯晖',
            tel: 1452148454,
          },
          {
            address: '李园',
            person: '张三',
            tel: 1452148454,
          },
          {
            address: '桃园',
            person: '李四',
            tel: 1452148454,
          },
        ],
        temp: {
          address: '',
          person: '',
          tel: '',
        },
      }
    },
    methods: {
      chooseAddr() {
        this.popupVisible = true
      },
      secondLine(item) {
        return item.person +' '+ item.tel
      },
      handleModify(item) {
        this.temp = Object.assign({}, item)
        this.popupVisible = true
      },
      addrClick(item) {
        console.log(item)
        this.temp = Object.assign({}, item)
        this.popupVisible = false
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