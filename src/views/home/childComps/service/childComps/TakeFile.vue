<template>
  <div id="takefile">
		<a href="qujian.html">
		<div class="take">
			<span class="fas fa-map-marker qu"></span>
			<p class="choiceAddr">请选择取件地址</p>
			<div class="giveBox">
				<img src="~assets/img/home/addr.jpg">
			</div>
		</div>
		</a>
		
		<a href="myaddr.html">
			<div class="give">
				<span class="fas fa-map-marker song"></span>
				<p class="choiceAddr">请选择送至地址</p>
				<div class="giveBox">
					<img src="~assets/img/home/addr.jpg">
				</div>
			</div>
		</a>
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
		<!-- <div class="serverFoot">
			<div class="footL"></div>
			<div class="footR">
				<p>T:121XXXXXX</p>
				<p>V:zhkkdjh</p>
			</div>
		</div> -->
  </div>
</template>

<script>
	
  export default {
    name: "TakeFile"
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