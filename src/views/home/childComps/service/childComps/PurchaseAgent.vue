<template>
  <div id="purchase-agent">
		<div class="expInfo">
			<p class="expTit">代购商品描述:</p>
			<textarea v-model="deliveryData.goodsDesc" name="expinfo" class="infotext" placeholder="描述需要代购的商品" ></textarea>
		</div>

		<div class="give" @click="chooseAddr">
			<div v-if="!temp">
				<span class="fas fa-map-marker song"></span>
				<p class="choiceAddr">请选择送至地址</p>
				<div class="giveBox">
					<img src="~assets/img/home/addr.jpg">
				</div> 
			</div>
			<div v-if="temp" class="give-addr-detail">
				<span class="give-addrInfo">{{temp.address}}</span>
				<span class="give-addremark">{{temp.name + ' ' + temp.tel}}</span>
			</div>
		</div>

		<div class="remarks">
			<p class="expTit">商品价格预计(此费用与配送员结算)</p>
			<input v-model="deliveryData.predictPrice" class="remarkInput" type="number" placeholder="" />
		</div>

		<div class="sub">
			<span class="dan">小费：</span>
			<input v-model="deliveryData.tips" type="text" class="num" value="1" @change="changeTips"/>
			<span class="dan"> 元</span>

			<div class="count">
				<span class="zj">总计：</span>
				<span class="money">￥{{deliveryData.total}}</span>
			</div>
			<button class="btn" @click="handleSubmit">提交订单</button>
		</div>
		<AddrPop ref="addrPop" @addrReturn="addrReturn" :addrData="addrData"></AddrPop>
  </div>
	
</template>

<script>
	import AddrPop from "components/content/addrpop/AddrPop"

	import { MessageBox,Toast } from 'mint-ui';

  export default {
		name: "PurchaseAgent",
		props: {
			addrData: Array
		},
		components: {
			AddrPop
		},
		data() {
			return {
				temp: undefined,
				deliveryData: {
					goodsDesc: '',
					sendInfo: {
						name: '',
						tel: '',
						address: ''
					},
					predictPrice: 0,
					tips: 0,
					total: 0
				},
			}
		},
		methods: {
			handleSubmit() {
				MessageBox.confirm('确定提交订单?').then(action => {
					// 上传订单数据
					setTimeout(() => {
						this.$router.push('/orderdetails')
					}, 1000);
				}).catch(() => {
					Toast({
						message:'订单未提交',
						duration: 1000
					});
				})
			},
			chooseAddr() {
        this.$refs.addrPop.addrChoose();
			},
      addrReturn(item) {
        // console.log(item)
        // 获取地址
        this.temp = Object.assign({}, item)
        this.deliveryData.sendInfo = Object.assign({}, item)
			},
			changeTips() {
				this.deliveryData.total = this.deliveryData.tips
			}
		}
  }
</script>

<style scoped>
	@import './css/all.css';
	@import './css/main.css';
  #purchase-agent {
    width: 90%;
    margin: 0 auto;
  }
  .remarks {
    line-height: 1.6rem;
  }
  .remarkInput {
    width: 7rem;
  }
  /* .tips {
    width: 2rem;
    border-radius: 5px;
    height: 1.2rem;
    margin-top: 0.2rem;
    font
	} */
	.remarks .expTit {
		margin-top: 0;
	}
</style>