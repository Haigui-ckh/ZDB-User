<template>
  <div id="NewAdd">
    <OnePageScroll @navRightClick="navRightClick">
      <span slot="centerword">新增地址</span>
      <span slot="rightword">确定</span>

      <div class="ipt-container">
        <mt-field label="姓名" placeholder="请输入姓名" v-model="personalAddr.username"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="personalAddr.phone"></mt-field>
        <mt-field label="楼栋" placeholder="点击选择楼栋" type="tel" v-model="personalAddr.building" @click.native="buildChoose"></mt-field>
        <mt-field label="详细地址" placeholder="在此输入详细地址，如楼层、门牌号等" type="textarea" rows="2" v-model="personalAddr.addressDetails"/>
      </div>
    </OnePageScroll>
    <!-- 楼栋选择弹窗 -->
    <mt-popup
      v-model="popupVisible"
      position="top"
      popup-transition="popup-fade"
      class="buildPop">
        <mt-cell v-for="(build,index) in buildings" :key="index" :title="build" @click.native="buildItemClick(build)"></mt-cell>
    </mt-popup>
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
        personalAddr: {
          phone: undefined,
          username: undefined,
          building: undefined,
          addressDetails: '',
        },
        buildings: ['李园八舍','桃园六舍','南园二舍'],
        popupVisible:false
      }
    },
    methods: {
      navRightClick() {
        // 提交数据
        // 
        this.$router.go(-1)
      },
      buildChoose() {
        this.popupVisible = true
      },
      buildItemClick(build) {
        this.popupVisible = false
        this.personalAddr.building = build
      }
    }
  }
</script>

<style scoped>
.ipt-container {
  width: 94%;
  margin: 0 auto;
}
.buildPop {
  width: 100%;
}

</style>