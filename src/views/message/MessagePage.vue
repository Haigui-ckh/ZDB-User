<template>
  <div id="messagepage">
    <!-- <div class="header">
      <h3>{{list[0].name}}</h3>
    </div> -->
    <back-nav>
      <div slot="center-word">{{list[0].name}}</div>
    </back-nav>
    <div class="main">
      <div class="talk">
        <div v-for="item in list" :key="item.name" 
            :class="item.id == '2'?'atalk':'btalk'">
          <span>{{item.content}}</span>
        </div>
      </div>
    </div>
    <div class="sendbox">
      <input v-model="wordone" class="inputword" @keyup.enter="sendmsg1">
      <input type="button" value="发送" @click="sendmsg1" class="btnsend">
    </div>
  </div>
</template>

<script>
  import BackNav from "components/content/backnav/BackNav"
  export default {
    name: "MessagePage",
    components: {
      BackNav
    },
    data() {
      return {
        list: [{
          id: 1,
          name: '客服',
          content: '您好'
        },{
          id: 2,
          name: '客户',
          content: '嗯嗯'
        }],
        wordone: '',
        wordtwo: ''
      }
    },
    methods: {
      sendmsg1() {
        this.list.push({id:1,name:'wj',content:this.wordone});
        this.wordone='';
      },
      sendmsg2() {
        this.list.push({id:2,name:'dd',content:this.wordtwo})
      }
    }
  }
</script>

<style scoped>
  #message {
    background-color: orchid;
  }
  .header {
    text-align: center;
    border-bottom: 1px solid var(--color-border);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .header h3 {
    margin: 5px;
    padding: 5px;
  }
  .main {
    position: absolute;
    top: 50.8px;
    right: 0;
    left: 0;
    bottom: 34px;
    z-index: 9;
    padding-bottom: 0 ; 
    background-color: white;
  }
  
  .atalk {
    margin: 10px;
  }
  .atalk span {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 15px;
    padding: 5px 10px;
    border: 1px solid blueviolet;
  }
  .btalk {
    text-align: right;
    margin: 10px;
  }
  .btalk span {
    display: inline-block;
    padding: 3px 10px;
    border: 1px solid blueviolet;
    border-radius: 15px;
  }
  .sendbox {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background-color:white;
    height: 34px;
    border-bottom-left-radius: 15px ;
    border-bottom-right-radius: 15px ;
    /* margin-top: 5px; */
    /* margin-left: 2%; */
  }
  .inputword {
    outline: none;
    width: 80%;
    height: 25px;
    margin-left: 10px;
    border-radius: 15px;
    text-indent: 12px;
  }
  .btnsend {
    outline: none;
    width: 13%;
    height: 25px;
    border-radius: 15px;
    border: 1px solid #CCCCCC;
    background-color: #FFCC99;
    color: white;
    margin-left:2%;
    margin-bottom: 10% ;
    /* font-size: 0.8rem; */
  }

</style>