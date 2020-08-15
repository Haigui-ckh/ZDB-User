<template>
  <div id="NewAdd">
    <OnePageScroll @navRightClick="navRightClick">
      <span slot="centerword">新增地址</span>
      <span slot="rightword">确定</span>
      <mt-field label="收件人姓名" placeholder="请输入收件人姓名" v-model="username"></mt-field>
      <mt-field label="收件人手机号" placeholder="请输入收件人手机号" type="tel" v-model="phone"></mt-field>
      <mt-field label="详细地址" placeholder="在此输入详细地址" type="textarea" rows="4" v-model="addressDetails"/>

    </OnePageScroll>
  </div>
</template>

<script>
  import OnePageScroll from "components/content/onepagescroll/OnePageScroll"

  export default {
    name: "NewAdd",
    components: {
      OnePageScroll
    },
    data() {
      return {
        phone: undefined,
        username: undefined,
        addressDetails: '',

      }
    },
    methods: {
      navRightClick() {
        // 提交数据
        // 
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
</style>