<template>
  <div id="my-profile">
    <OnePageScroll>
      <div slot="rightword" style="color:orange" @click="preserveClick">保存</div>
      <span slot="centerword">我的资料</span>
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
      <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
      <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
      <mt-cell
        title="添加收货地址"
        to="/shippingaddress"
        is-link/>
    </OnePageScroll>
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade"
      class="popTip"
      >
      <div>保存成功!</div>
    </mt-popup>
  </div>
</template>

<script>
  import OnePageScroll from "components/content/onepagescroll/OnePageScroll"
  export default {
    name: "MyProfile",
    components: {
      OnePageScroll
    },
    data() {
      return{
        username :'' ,
        phone:'' ,
        number:'' ,
        birthday:'',
        popupVisible: false
        }
    },
    methods: {
      preserveClick() {
        console.log('保存')
        this.popupVisible = true
        setTimeout(() => {
          this.popupVisible= false
        }, 2000);
      }
    }
  }
</script>

<style scoped>
  .popTip{
  height: 100px;
  line-height: 100px;
  width: 200px;
  text-align: center;
  font-size: 16px;
  background-color: white;
  border: 1px solid orange;
  border-radius: 15px;
}
</style>