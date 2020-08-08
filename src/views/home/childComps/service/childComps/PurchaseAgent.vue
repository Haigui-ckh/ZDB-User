<template>
  <div id="purchase-agent">
		<div class="expInfo">
			<p class="expTit">代购商品描述:</p>
			<textarea name="expinfo" class="infotext" placeholder="描述需要代购的商品"></textarea>
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
		<div class="remarks">
			<p class="expTit">商品价格预计(此费用与配送员结算)</p>
			<input class="remarkInput" type="number" placeholder="" />
		</div>
		<div class="sub">
			<span class="dan">小费：</span>
			<input type="text" class="num" value="1"/><span class="dan"> 元</span>
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
    name: "PurchaseAgent"
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