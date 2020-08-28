<template>
  <div id="shippingaddress">
    <OnePageScroll @navRightClick="navRightClick">
      <span slot="centerword">我的地址</span>
      <span slot="rightword">新增</span>
      <div class="address-list">
        <mt-cell v-for="(item,index) in addData" :key="index"  :title="firstLine(item)" :label="secondLine(item)">
          <img src="~@/assets/img/profile/modify.svg" @click="handleModify(item)">
        </mt-cell>
      </div>

      <mt-popup
        v-model="popupVisible"
        position="bottom"
        class="modifyPop">

          <mt-button @click="modifyData" class="confirmBtn">确认</mt-button>
          <mt-button @click="popupVisible = false" class="confirmBtn">取消</mt-button>


        <mt-field label="收件人姓名" placeholder="请输入收件人姓名" v-model="temp.person"></mt-field>
        <mt-field label="收件人手机号" placeholder="请输入收件人手机号" type="tel" v-model="temp.tel"></mt-field>
        <mt-field label="楼栋" placeholder="点击选择楼栋" type="tel" v-model="temp.building" @click.native="buildChoose"></mt-field>
        <mt-field label="详细地址" placeholder="在此输入详细地址" type="textarea" rows="3" v-model="temp.addressDetails"/>
      </mt-popup>

      <!-- 楼栋选择弹窗 -->
      <mt-popup
        v-model="buildPopVisible"
        position="bottom"
        popup-transition="popup-fade"
        class="buildPop">
          <mt-cell v-for="(build,index) in buildings" :key="index" :title="build" @click.native="buildItemClick(build)"></mt-cell>
      </mt-popup>
    </OnePageScroll>
  </div>
</template>

<script>
  import OnePageScroll from "components/content/onepagescroll/OnePageScroll"
  import { Toast } from 'mint-ui';

  export default {
    name: "ShippingAddress",
    components: {
      OnePageScroll
    },
    data() {
      return {
        addData:[
          {
            addressDetails: '101',
            building: '竹园八舍',
            person: '曹凯晖',
            tel: 1452148454,
          },
          {
            addressDetails: '202',
            building: '李园八舍',
            person: '张三',
            tel: 1452148454,
          },
          {
            addressDetails: '303',
            building: '桃园六舍',
            person: '李四',
            tel: 1452148454,
          },
        ],
        popupVisible: false,
        buildPopVisible: false,
        phone: undefined,
        username: undefined,
        addressDetails: '',
        temp: {
          addressDetails: '',
          person: '',
          tel: '',
          building: ''
        },
        buildings: ['李园八舍','桃园六舍','南园二舍'],
      }
    },
    methods: {
      navRightClick() {
        this.$router.push('/newadd')
      },
      handleModify(item) {
        this.temp = Object.assign({}, item)
        this.popupVisible = true
      },
      firstLine(item) {
        return item.building + ' '+item.addressDetails
      },
      secondLine(item) {
        return item.person +' '+ item.tel
      },
      modifyData() {
        // 提交更改的数据
        this.popupVisible = false
        
        Toast({
          message: '修改成功',
          duration: 2000
        });
      },
      buildChoose() {
        this.buildPopVisible = true
      },
      buildItemClick(build) {
        this.buildPopVisible = false
        this.temp.building = build
      }
    }
  }
</script>

<style scoped>
  .address-list {
    margin: 0;
    padding: 0;
  }
  .address-list li {
    height: 3rem;
    line-height: 3rem;
    background-color: violet;
  }
  .address-wrapper {
    width: 100%;
    display: flex;
    padding: 0 10px;
  }
  .address-list img {
    height: 24px;
  }
  .modifyPop {
    width: 100%;
  }
  .modifyPop .confirmBtn {
    width: 50%;
    background-color: #FF9933;
    font-size: 16px;
    color: white;
  }
  .buildPop {
    width: 100%;
  }
</style>