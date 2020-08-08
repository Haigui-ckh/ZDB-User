<template>
  <div id="my-profile">
    <OnePageScroll>
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
        birthday:''
        }
    }
  }
</script>

<style scoped>
</style>