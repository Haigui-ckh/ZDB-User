<template>
  <div id="message">
    <back-nav>
      <div slot="center-word">消息中心</div>
    </back-nav>
    <scroll>
      <ul class="message-list">
        <li class="message-list-item" @click="messageItmeClick(messageid)">
          <div class="message-head">
            <img src="~assets/img/profile/tx1.jpg">
          </div>
          <div class="message-content">
            <p>小花</p>
            <div>小花：你好</div>
          </div>
          <div class="message-time">2020-8-06</div>
        </li>
        <li class="message-list-item">
          <div class="message-head">
            <img src="~assets/img/profile/tx1.jpg">
          </div>
          <div class="message-content">
            <p>小花</p>
            <div>小花:</div>
          </div>
          <div class="message-time">2020-8-06</div>
        </li>
        <li class="message-list-item">
          <div class="message-head">
            <img src="~assets/img/profile/tx1.jpg">
          </div>
          <div class="message-content">
            <p>小花</p>
            <div>小花：你好</div>
          </div>
          <div class="message-time">2020-8-06</div>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import BackNav from "components/content/backnav/BackNav"
  import Scroll from "components/common/scroll/Scroll"

  export default {
    name: "Message",
    components: {
      BackNav,
      Scroll
    },
    data() {
      return{
        messageid: 1
    }
    },
    props: {
      messages: []
    },
    methods: {
      messageItmeClick(mid) {
        this.$router.push({
          path: '/messagepage',
          query:{'mid': mid}
        })
      }
    }
  }
</script>

<style scoped>
  #message {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: white;
    z-index: 9;
  }
  .message-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .message-list-item {
    display: flex;
  }
  .message-head {
    width: 20%;
    padding: 2%;
    margin-left: 5px;
  }
  .message-head img {
    width: 80%;
    border-radius: 50%;
  }
  .message-content {
    width: 55%;
    overflow: hidden;
  }
  .message-content p{
    margin-bottom: 8px ;
  }
  .message-content div{
    color: #666666;
    font-size: 0.8rem;
    overflow: hidden;
    white-space: nowrap;
  }
  .message-time {
    font-size: 10px;
    padding-top: 2%;
  }
</style>