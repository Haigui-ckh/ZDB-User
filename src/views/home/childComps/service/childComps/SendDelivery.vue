<template>
  <div id="senddelivery">
		<div class="give" @click="chooseAddr">
			<div v-if="!temp">
				<span class="fas fa-map-marker qu"></span>
				<p class="choiceAddr">请选择取件地址</p>
				<div class="giveBox">
					<img src="~assets/img/home/addr.jpg">
				</div>
			</div>
			<div v-if="temp" class="give-addr-detail">
				<span class="give-addrInfo">{{temp.address}}</span>
				<span class="give-addremark">{{temp.name + ' ' + temp.tel}}</span>
			</div>
		</div>
		<!-- <a href="myaddr.html"> -->
			<div class="give" @click="fillSendInfo">
				<span class="fas fa-map-marker song"></span>
				<p class="choiceAddr">填写收件信息</p>
				<div class="giveBox">
					<img src="~assets/img/home/addr.jpg">
				</div>
			</div>
		<!-- </a> -->
		<div class="take">
			<span class="fas fa-map-marker qu"></span>
			<p class="choiceAddr">快递要求</p>
			<div class="selectBox">
				<span class="fas fa-sort-down down"></span>
				<select name="addr" class="sAddr">
					<option value="yt">圆通</option>
					<option value="zt">中通</option>
					<option value="yd">韵达</option>
					<option value="bs">百世</option>
				</select>
			</div>
		</div>
		<div class="screenshotInfo">
			<p class="expTit"> 截图信息:</p>
			<van-uploader v-model="fileList" multiple preview-size="50"/>
			<!-- <p class="voucher">取货信息截图</p> -->
		</div>
		<div class="remarks">
			<p class="expTit">备注信息（选填）:</p>
			<input class="remarkInput" type="text" placeholder="时间、无接触配送、代付、指定快递员等" />
		</div>
		<div class="specs">
			<p class="expTit">*规格选项:</p>
			<Specs :specifications="specifications" @selectSpec="selectSpec"></Specs>
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

		<AddrPop ref="addrPop" @addrReturn="addrReturn" :addrData="addrData"></AddrPop>

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
import { Uploader } from 'vant'
import Specs from './Specs'
import AddrPop from "components/content/addrpop/AddrPop"

import { MessageBox, Toast, Indicator } from 'mint-ui';

export default {
	name: "SendDelivery",
	components: {
		[Uploader.name] : Uploader,
		Specs,
		AddrPop
	},
	props: {
		addrData: Array
	},
	computed: {
		totalPrice() {
			if (this.specsSelected !== []) {
				let total = this.specsSelectedPrice.reduce(this.computeTotal)
				return total
			}
		}
	},
	data () {
		return {
			fileList: [
				{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
			],
			temp: undefined,
			specsSelectedPrice: [ 0 ],
			specifications: [
				{ id: 1, name: '1~5kg', price: 3 },
				{ id: 2, name: '10kg~20kg', price: 6 },
				{ id: 3, name: '电子产品', price: 0 },
				{ id: 4, name: '体积较大', price: 0 },
			],
			deliveryData: {
				// takeAddr: '',
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
				expRequire: '',
				imgInfo: undefined,
				remark: '',
				specs: '',
				specialService: '',
				orderNum: undefined,
				total: undefined
			},
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
		chooseAddr() {
			this.$refs.addrPop.addrChoose();
		},
		addrReturn(item) {
			// console.log(item)
			// 获取地址
			this.temp = Object.assign({}, item)
		},
		fillSendInfo() {
			this.sendInfoShow = true
		}
	}
}
</script>

<style scoped>
  @import './css/all.css';
	@import './css/main.css';
  #senddelivery {
    width: 90%;
    margin:0 auto;
  }
</style>