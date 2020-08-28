<template>
  <div id="my-profile">
    <OnePageScroll>
      <div slot="rightword" style="color:orange" @click="preserveClick">保存</div>
      <span slot="centerword">我的资料</span>
      <mt-field label="用户名" placeholder="请输入用户名" v-model="userprofile.username"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="userprofile.phone"></mt-field>
      <mt-field label="用户ID" v-model="userprofile.id" readonly disableClear></mt-field>
      <mt-field label="生日" placeholder="请输入生日" type="date" v-model="userprofile.birthday"></mt-field>
      <mt-cell
        title="选择省市区"
        @click.native="popupVisible = true"
        is-link  :value="area"/>
      <mt-cell
        title="添加收货地址"
        to="/shippingaddress"
        is-link/>
      <mt-popup
        v-model="popupVisible"
        position="bottom" style="width:100%">
        <van-picker show-toolbar title="选择省-市-区" :columns="areas" @confirm="areaSelect"/>
      </mt-popup>
    </OnePageScroll>
  </div>
</template>

<script>
  import OnePageScroll from "components/content/onepagescroll/OnePageScroll"
  // import arealist from '@/common/js/arealist.js'
  import { Toast, Picker } from 'vant'
  
  export default {
    name: "MyProfile",
    components: {
      OnePageScroll,
      [Picker.name]: Picker
    },
    data() {
      return{
        userprofile: {
          username :'' ,
          phone:'' ,
          id:'111' ,
          birthday:'',
          province: 2,
          city: 1,
          county: 4,
        },
        popupVisible: false,
        // 传入的省市区列表
        areas: [
          { id: 1, text: '北京市', children: [
            { id: 1, text: '北京市', pid: 1, children: [
              { id: 1, text: '北城区', cid: 1 },
              { id: 2, text: '东城区', cid: 1 },
              { id: 3, text: '西城区', cid: 1 },
              { id: 4, text: '朝阳区', cid: 1 },
            ]}
          ]},
          { id: 2, text: '天津市', children: [
            { id: 1, text: '天津市', pid: 2, children: [
              { id: 1, text: '和平区', cid: 1 },
              { id: 2, text: '河东区', cid: 1 },
              { id: 3, text: '南开区', cid: 1 },
              { id: 4, text: '河西区', cid: 1 },
            ]}
          ]},
          { id: 3, text: '重庆市', children: [
            { id: 1, text: '重庆市', pid: 3, children: [
              { id: 1, text: '江北区', cid: 1 },
              { id: 2, text: '渝北区', cid: 1 },
              { id: 3, text: '渝中区', cid: 1 },
              { id: 4, text: '北碚区', cid: 1 },
            ]}
          ]},

        ],
        areaTemp: {          
          province: '',
          city: '',
          county: '',
        }
      }
    },
    computed: {
      area() {
        if (this.userprofile.province != '') {
          return this.areaTemp.province + '-' + this.areaTemp.city + '-' + this.areaTemp.county
        }
      }
    },
    created() {
      let area = {
        province: this.userprofile.province,
        city: this.userprofile.city,
        county: this.userprofile.county,
      }
      this.findText(area)
    },
    methods: {
      preserveClick() {
        
        // 提交数据


        Toast({
          message: '保存成功',
          position: 'middle',
          duration: 2000
        })
      },
      areaSelect(area) {
        // 省市区中文字符展示
        this.areaTemp = {
          province: area[0],
          city: area[1],
          county: area[2]
        }
        //通过字符查找id并赋值到userprofile中
        this.findId(area)

        this.popupVisible = false
      },
      findId(area) {
        let province = this.areas.filter(findProvince)[0]
        let city = province.children.filter(findCity)[0]
        let county = city.children.filter(findCounty)[0]
        function findProvince(value, index, array){
          return  value.text === area[0]
        }
        function findCity(value, index, array){
          return  value.text === area[1]
        }
        function findCounty(value, index, array){
          return  value.text === area[2]
        }
        this.userprofile.province = province.id
        this.userprofile.city = city.id
        this.userprofile.city = city.id
        // console.log(this.userprofile.province + ' ' + this.userprofile.city +' ' +this.userprofile.county)
      },
      findText(area) {
        let province = this.areas.filter(findProvince)[0]
        let city = province.children.filter(findCity)[0]
        let county = city.children.filter(findCounty)[0]
        function findProvince(value, index, array){
          return  value.id === area.province
        }
        function findCity(value, index, array){
          return  value.id === area.city
        }
        function findCounty(value, index, array){
          return  value.id === area.county
        }
        this.areaTemp.province = province.text
        this.areaTemp.city = city.text
        this.areaTemp.county = county.text
      },
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