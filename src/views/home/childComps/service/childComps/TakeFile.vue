<template>
  <div id="takefile">
		<div class="take" @click="takeInfoShow = true">
			<span class="fas fa-map-marker qu"></span>
			<p class="choiceAddr">点击填写取件地址</p>
			<div class="giveBox">
				<img src="~assets/img/home/addr.jpg">
			</div>
		</div>
		<div class="give" @click="sendInfoShow = true">
			<span class="fas fa-map-marker song"></span>
			<p class="choiceAddr">点击填写送至地址</p>
			<div class="giveBox">
				<img src="~assets/img/home/addr.jpg">
			</div> 
		</div>
		<div class="remarks">
			<p class="expTit">备注信息:</p>
			<input class="remarkInput" type="text" placeholder="时间、无接触配送、代付、指定快递员等" />
		</div>
		<div class="specs">
			<p class="expTit">*规格选项:</p>
			<Specs :specifications="specifications" @selectSpec="selectSpec"></Specs>
		</div>
		
		<div class="special">
			<p class="expTit">特殊服务:</p>
			<Specs :specifications="specialservice" @selectSpec="selectSpecial"></Specs>
		</div>
		
		<div class="sub">
			<span class="dan">单量：</span>
			<input type="text" class="num" value="1"/>
			<div class="count">
				<span class="zj">总计：</span>
				<span class="money">￥{{totalPrice}}</span>
			</div>
			<button class="btn" @click="handleSubmit">提交订单</button>
		</div>

		<!-- <AddrPop ref="addrPop" @addrReturn="addrReturn" :addrData="addrData"></AddrPop> -->

		<mt-popup
			v-model="takeInfoShow"
			position="bottom"
			style="width: 100%;"
		>
			<mt-field label="姓名" placeholder="请输入联系人姓名或称呼" v-model="deliveryData.takeInfo.name"></mt-field>
			<mt-field label="手机号" placeholder="请输入联系人手机号" type="tel" v-model="deliveryData.takeInfo.tel"></mt-field>
			<mt-field label="地址" placeholder="请输入取件地址" type="textarea" rows="3" v-model="deliveryData.takeInfo.addr"></mt-field>
			<mt-button type="default" size="large" style="background-color:orange; color: white" @click="takeInfoShow = false">确认</mt-button>
		</mt-popup>
		<mt-popup
			v-model="sendInfoShow"
			position="bottom"
			style="width: 100%;"
		>
			<mt-field label="姓名" placeholder="请输入收件人姓名" v-model="deliveryData.sendInfo.name"></mt-field>
			<mt-field label="手机号" placeholder="请输入收件人手机号" type="tel" v-model="deliveryData.sendInfo.tel"></mt-field>
			<mt-field label="地址" placeholder="请输入收件人地址" type="textarea" rows="3" v-model="deliveryData.sendInfo.addr"></mt-field>
			<mt-button type="default" size="large" style="background-color:orange; color: white" @click="sendInfoShow = false">确认</mt-button>
		</mt-popup>
  </div>
	
</template>

<script>
	// import AddrPop from "components/content/addrpop/AddrPop"
	import Specs from './Specs'

	import { MessageBox,Toast } from 'mint-ui';

  export default {
		name: "TakeFile",
		props: {
			addrData: Array
		},
		components: {
			Specs
		},
		computed: {
			totalPrice() {
				if (this.specsSelected !== []) {
					let total = this.specsSelectedPrice.reduce(this.computeTotal) + this.specialSelectedPrice.reduce(this.computeTotal)
					return total
				}
			}
		},
		data() {
			return{
				fileList: [
					{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
				],
				temp: undefined,
				deliveryData: {
					takeInfo: {
						name: '',
						tel: '',
						addr: ''
					},
					sendInfo: {
						name: '',
						tel: '',
						addr: ''
					},
					remark: '',
					specs: [],
					specialService: [],
					orderNum: undefined,
					total: undefined
				},
				specsSelectedPrice: [ 0 ],
				specialSelectedPrice: [ 0 ],
				specifications: [
					{ id: 1, name: '1~5kg', price: 3 },
					{ id: 2, name: '10kg~20kg', price: 6 },
					{ id: 3, name: '电子产品', price: 0 },
					{ id: 4, name: '体积较大', price: 0 },
				],
				specialservice: [
					{ id: 1, name: '加急', price: 2},
					{ id: 1, name: '托管', price: 1},
					{ id: 1, name: '超级加急', price: 4},
				],
				takeInfoShow: false,
				sendInfoShow: false
			}
		},
		methods: {
			computeTotal(total, value, index, array) {
				return total = total + value
			},
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
			selectSpec(price, id) {
				this.specsSelectedPrice = price
				this.deliveryData.specs = id

				this.deliveryData.total = this.totalPrice
			},
			selectSpecial(price, id) {
				this.specialSelectedPrice = price
				this.deliveryData.specialService = id

				this.deliveryData.total = this.totalPrice
			}
			// chooseAddr() {
      //   this.$refs.addrPop.addrChoose();
			// },
      // addrReturn(item) {
      //   this.temp = Object.assign({}, item)
			// },
		}
  }
</script>
	
<style scoped>
	@import './css/all.css';
	@import './css/main.css';
	#takefile {
		width: 90%;
		margin: 0 auto;
	}
</style>