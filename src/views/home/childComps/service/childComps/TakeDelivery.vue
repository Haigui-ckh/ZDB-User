<template>
  <div id="takedelivery">
		<div class="take">
			<span class="fas fa-map-marker qu"></span>
			<p class="choiceAddr">请选择取件地址</p>
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
		
		<div class="expInfo">
			<p class="expTit">*快递信息:</p>
			<textarea v-model="deliveryData.expInfo"  name="expinfo" class="infotext" placeholder="请粘贴取货信息等"></textarea>
		</div>
		
		<div class="screenshotInfo">
			<p class="expTit"> 截图信息:</p>
			<van-uploader v-model="fileList" multiple preview-size="50"/>
			<!-- <p class="voucher">  取货信息截图</p> -->
		</div>
		
		<div class="remarks">
			<p class="expTit">备注信息:</p>
			<input v-model="deliveryData.remark" class="remarkInput" type="text" placeholder="时间、无接触配送、代付、指定快递员等" />
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
		<AddrPop ref="addrPop" @addrReturn="addrReturn" :addrData="addrData"></AddrPop>
		<Confirm ref="Confirm"></Confirm>

  </div>  
		
</template>

<script>
	import { Uploader, Checkbox, CheckboxGroup } from 'vant'
	import AddrPop from "components/content/addrpop/AddrPop"
	import Specs from './Specs'
	import Confirm from "components/common/confirm/Confirm"
	
	import { MessageBox,Toast } from 'mint-ui';

  export default {
		name: "TakeDelivery",
		components: {
			[Uploader.name]: Uploader,
			[Checkbox.name]: Checkbox,
			[CheckboxGroup.name]: CheckboxGroup,
			AddrPop,
			Specs,
			Confirm
		},
		props: {
			addrData: Array
		},
		data() {
			return{
				fileList: [
					{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
					// Uploader 根据文件后缀来判断是否为图片文件
					// 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
				],
				deliveryData: {
					takeAddr: '',
					sendInfo: {
						name: '',
						tel: '',
						address: ''
					},
					expInfo: '',
					imgInfo: undefined,
					remark: '',
					specs: '',
					specialService: '',
					orderNum: undefined,
					total: undefined
				},
				temp: undefined,
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
				]
			}
		},
		computed: {
			// 总价计算  来源为规格和特殊服务
			totalPrice() {
				if (this.specsSelected !== []) {
					let total = this.specsSelectedPrice.reduce(this.computeTotal) + this.specialSelectedPrice.reduce(this.computeTotal)
					return total
				}
			}
		},
		methods: {
			computeTotal(total, value, index, array) {
				return total = total + value
			},
			changeImage() {
				// 上传图片事件
				var files = this.$refs.srceenshotInput.files;
				var that = this;
				function readAndPreview(file) {        
					//Make sure `file.name` matches our extensions criteria
					if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
						var reader = new FileReader();
						reader.onload = function(e) {
							// 防止重复上传
							if (that.imgDatas.indexOf(e.target.result) === -1) {
								that.imgDatas.push(e.target.result);
							}
						};
						reader.readAsDataURL(file);
					}
				}
				readAndPreview(files[0])

				if (files.length === 0) {
					return;
				}
				
				// 文件上传服务器
				// this.setUploadFile(files[0])
				console.log(files[0])
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
			chooseAddr() {
        this.$refs.addrPop.addrChoose();
			},
      addrReturn(item) {
        // console.log(item)
        // 获取地址
				this.temp = Object.assign({}, item)
				this.deliveryData.sendInfo = Object.assign({}, item)
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
		}
	}
</script>

<style scoped>
	@import './css/all.css';
	@import './css/main.css';

	#takedelivery {
		width: 90%;
		margin: 0 auto ;
		clear: both;
	}
	  .confirm_order {
    display: flex;
    position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
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
</style>