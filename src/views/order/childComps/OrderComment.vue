<template>
  <div id="order-comment">
    <back-nav>
      <div slot="center-word">评论</div>
      <div slot="right-content" class="commit" @click="commitClick">提交</div>
    </back-nav>
    <ul class="content">
      <li>产品味道<stars @starClick="tastestar"></stars></li>
      <li>产品包装<stars @starClick="packingstar"></stars></li>
      <li>配送速度<stars @starClick="speedstar"></stars></li>
      <li class="comment-content">
        点评内容
        <!-- <input placeholder="输入评论内容"> -->
        <textarea placeholder="输入评论内容"></textarea>
      </li>
      <li class="anonymous">
        匿名评论
        <input type="checkbox" v-model="anonymousFlag" 
                value="anonymous">
      </li>
    </ul>
    
  </div>
</template>

<script>

import BackNav from "components/content/backnav/BackNav"
import Stars from "components/content/order/Stars"
import { Toast } from 'vant'

export default {
  name: "OrderComment",
  components: {
    BackNav,
    Stars
  },
  data() {
    return{
      star: {
        'taste': 0,
        'packing': 0,
        'speed': 0
      },
      anonymousFlag: false,
      comment: String
    }
  },
  methods: {
    // stars获取
    tastestar(stars) {
      this.star.taste = stars;
    },
    packingstar(stars) {
      this.star.packing = stars;
    },
    speedstar(stars) {
      this.star.speed = stars;
    },
    // 提交
    commitClick() {
      // 提交星级和评论内容和匿名评论flag
      console.log('提交')
      this.$router.go(-1)
      //成功与否弹窗
      Toast({
        message:'评价成功',
        position: 'middle',
        duration: 2000
      })
    }
  }
}
</script>

<style scoped>
  #order-comment{
    position:absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    z-index: 9;
    background-color: white;
  }
  #order-comment ul {
    list-style: none;
    padding-left: 0;
  }
  #order-comment ul li {
    display: flex;
  }
  .comment-content textarea {
    height: 100px;
    width: 70%;
    margin-left: 10px;
    border: 1px solid var(--color-border);
    border-radius: 5px;
  }
  .content {
    /* background-color: thistle; */
    
  }
  .content li {
    margin-bottom: 10px;
    padding-bottom: 10px;
    padding-left: 5%;
    border-bottom:1px solid var(--color-border) ;
  }
  .anonymous input {
    margin-left: 10px;
  }

  .commit {
    color: var(--color-theme);
  }

  input[type="checkbox"]{width:20px;height:20px;display: inline-block;text-align: center;vertical-align: middle; line-height: 18px;position: relative;}
  input[type="checkbox"]::before{content: "";position: absolute;top: 0;left: 0;background: #fff;width: 100%;height: 100%;border: 1px solid #d9d9d9}
  input[type="checkbox"]:checked::before{content: "\2713";background-color: #fff;position: absolute;top: 0;left: 0;width:100%;border: 1px solid var(--color-theme);color:var(--color-theme);font-size: 20px;font-weight: bold;}
</style>