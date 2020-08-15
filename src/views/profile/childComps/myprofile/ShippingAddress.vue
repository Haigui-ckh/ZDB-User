<template>
  <div id="shippingaddress">
    <OnePageScroll @navRightClick="navRightClick">
      <span slot="centerword">我的地址</span>
      <span slot="rightword">新增</span>
      <div class="address-list">
        <!-- <mt-cell :title="address" :label="secondLine">
          <img src="~@/assets/img/profile/modify.svg" @click="handleModify(item)">
        </mt-cell> -->
        <mt-cell v-for="(item,index) in addData" :key="index"  :title="item.address" :label="secondLine(item)">
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
        <mt-field label="详细地址" placeholder="在此输入详细地址" type="textarea" rows="3" v-model="temp.address"/>
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
            address: '竹园',
            person: '曹凯晖',
            tel: 1452148454,
          },
          {
            address: '李园',
            person: '张三',
            tel: 1452148454,
          },
          {
            address: '桃园',
            person: '李四',
            tel: 1452148454,
          },
        ],
        popupVisible: false,
        phone: undefined,
        username: undefined,
        addressDetails: '',
        temp: {
          address: '',
          person: '',
          tel: '',
        }
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
</style>