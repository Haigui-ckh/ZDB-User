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
		
		<a href="myaddr.html">
			<div class="give">
				<span class="fas fa-map-marker song"></span>
				<p class="choiceAddr">请选择送至地址</p>
				<div class="giveBox">
					<img src="~assets/img/home/addr.jpg">
				</div>
			</div>
		</a>
		
		<div class="expInfo">
			<p class="expTit">*快递信息:</p>
			<textarea name="expinfo" class="infotext" placeholder="请粘贴取货信息等"></textarea>
		</div>
		
		<div class="screenshotInfo">
			<p class="expTit"> 截图信息:</p>
			<!-- <div class="pic_list_box">
				<div class="pic_list" v-show="imgDatas.length">
					<div v-for="(src,index) in imgDatas" :key="index">
						<img :src="src">
					</div>
				</div>
      </div> -->
			<div class="upImg">
				<input type="file" class="choisImg" ref="srceenshotInput"
							accept="image/*" @change="changeImage"/>
			</div>
			<p class="voucher">  取货信息截图</p>
		</div>
		
		<div class="remarks">
			<p class="expTit">备注信息:</p>
			<input class="remarkInput" type="text" placeholder="时间、无接触配送、代付、指定快递员等" />
		</div>
		
		<div class="specs">
			<p class="expTit">*规格选项:</p>
		</div>
		
		<div class="special">
			<p class="expTit">特殊服务:</p>
		</div>
		
		<div class="sub">
			<span class="dan">单量：</span>
			<input type="text" class="num" value="1"/>
			<div class="count">
				<span class="zj">总计：</span>
				<span class="money">￥0</span>
			</div>
			<button class="btn">提交订单</button>
		</div>
  </div>  
		
</template>

<script>
  export default {
		name: "TakeDelivery",
		data() {
			return{
				imgDatas: [{
					src: ''
				},
				{
					src: ''
				}]
			}
		},
		methods: {
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
</style>