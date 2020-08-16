<template>
  <div>
    <OnePageScroll>
      <span slot="centerword">支付订单</span>
      <div class="payPrice">
        <div>
          <span class="priceSymbol">￥</span>
          <span class="priceTag">16.00</span>
        </div>
      </div>
      <div class="payMethods">
        <van-radio-group v-model="radio" class="payMethods-List">
          <van-cell-group>
            <van-cell title="微信支付" clickable @click="radio = '1'">
              <template #right-icon>
                <van-radio name="1" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>

      </div>
    </OnePageScroll>
    <section class="confirm_order">
      <p class="wait">
        <button>确认支付</button>
      </p>
    </section>
  </div>
</template>

<script>
import OnePageScroll from '@/components/content/onepagescroll/OnePageScroll'
import { RadioGroup, Radio, Cell, CellGroup } from 'vant'

export default {
  name: "Pay",
  components: {
    OnePageScroll,
    [RadioGroup.name] : RadioGroup,
    [Radio.name] : Radio,
    [Cell.name] : Cell,
    [CellGroup.name] : CellGroup,
  },
  data() {
    return {
      radio: '1'
    }
  },
}
</script>

<style scoped>
.payPrice {
  height: 200px;
  line-height: 200px;
  width: 100%;
  text-align: center;
}
.payPrice .priceTag{
  font-size: 2.5rem;
}
.payPrice .priceSymbol{
  font-size: 1.5rem;
}
.payMethods {
  width: 94%;
  height: 200px;
  margin: 0 auto;
  padding-top: 10px;
  border-radius: 15px;
  background-color: white;
}
.payMethods-List {
  margin: 0px auto;
  width: 96%;
}
.confirm_order {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3rem;
  z-index: 10;
}
.confirm_order p{
  height: 100%;
  line-height: 3rem;
  margin-top: 0 ;
}
.confirm_order .wait {
  width: 100%;
  background-color: #ffffff;
  padding: 0 .7rem;
  color:white;
}
.confirm_order .wait button{
  width: 100%;
  height: 80%;
  line-height: 80%;
  background-color:  var(--color-theme);
  color:white;
  border-radius: 15px;
  
}
.confirm_order .pay {
  flex: 2;
  background-color: var(--color-theme);
  text-align: center;
  color: white;
}
</style>