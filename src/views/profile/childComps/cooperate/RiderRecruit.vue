<template>
  <div id="rider-recruit">
    <back-nav>
      <div slot="center-word">骑手招募</div>
    </back-nav>
    <scroll class="scroll">
      <div class="banner">
        <img src="~assets/img/store/s3.jpg">
      </div>
      <!-- 骑手招募页面 -->
      <div class="work-type content-box">
        <p>意向工作类型</p>
        <div class="work-type-item" @click="type1click" :class="{active : riderInfo.worktype === 1}">快递骑手</div>
        <div class="work-type-item" @click="type2click" :class="{active : riderInfo.worktype === 2}">外卖骑手</div>
      </div>
      <div class="rider-tel content-box">
        <span>手机号:</span>
        <input class="rider-tel-ipt" type="text" placeholder="输入您的手机号">
      </div>
      <div class="common-question">
        <p>常见问题</p>
        <ol>
          <li class="order-list">
            兼职骑手和全职骑手有什么区别，日常配送时间是怎样安排的？
            <ul class="contained-list">
              <li>兼职骑手即众包骑手，根据自己的时间决定配送时长，即使有正式工作，也可以利用空闲时间在平台接单赚钱；</li>
              <li>全职骑手即专送骑手，将由美团配送加盟商负责招募后续事宜，并需以加盟商各配送站点时间安排进行配送；</li>
              <li>只要您身体健康，年龄在18-50周岁之间，有一部智能手机和交通工具，就可以申请成为众包骑手或者专送骑手；</li>
            </ul>
          </li>
          <li class="order-list">
            兼职骑手和全职骑手有什么区别，日常配送时间是怎样安排的？
            <ul class="contained-list">
              <li>兼职骑手即众包骑手，根据自己的时间决定配送时长，即使有正式工作，也可以利用空闲时间在平台接单赚钱；</li>
              <li>全职骑手即专送骑手，将由美团配送加盟商负责招募后续事宜，并需以加盟商各配送站点时间安排进行配送；</li>
              <li>只要您身体健康，年龄在18-50周岁之间，有一部智能手机和交通工具，就可以申请成为众包骑手或者专送骑手；</li>
            </ul>
          </li>

        </ol>
      </div>
    </scroll>
  </div>
</template>

<script>
  import BackNav from "components/content/backnav/BackNav"
  import Scroll from "components/common/scroll/Scroll"

  export default {
    name: "RiderRecruit",
    components: {
      BackNav,
      Scroll
    },
    data() {
      return{
        riderInfo: {
          tel:String,
          worktype: 0
        }
        
      }
    },
    methods: {
      type1click() {
        this.riderInfo.worktype = 1;
      },
      type2click() {
        this.riderInfo.worktype = 2;
      }
    }

  }   
    

</script>

<style scoped>
  #rider-recruit {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    z-index: 9;
    background-color: white;
  }
  #rider-recruit .banner {
    width: 100%;
  }
  #rider-recruit .banner img {
    width: 100%;
  }
  .content-box {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    border-top: 2px solid #f6f6f6;
  }
  .work-type {

  }
  .work-type p {
    width: 100%;
    padding-left: 30px ;
  }
  .work-type-item {
    width: 40%;
    height: 80px;
    line-height: 80px;
    margin: 0 auto;
    border:2px solid #f6f6f6;
    /* border:2px solid var(--color-theme); */
    border-radius: 10px;
    text-align: center;
  }
  .rider-tel {
    padding-top: 20px ;
    /* margin-left: 30px; */
  }
  .rider-tel span {
    margin-left: 30px;
    margin-right: 20px;
  }
  .rider-tel-ipt {
    border: none;
    border-bottom: 1px solid rgba(85, 78, 85, 0.133);
    width: 60%;
    color: var(--color-text);
  }
  .active {
    border-color: var(--color-theme) ;
  }
  .common-question {
    margin-top: 30px;
    padding-right: 20px;
  }
  .common-question p {
    width: 100%;
    text-align: center;
  }
  .order-list {
  }
  .contained-list {
    color:slategrey;
    font-size: 12px;
    padding-left: 10px;

  }
  .scroll {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
    z-index: -1;
    background-color: white;
  }

</style>