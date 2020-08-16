<template>
  <div>
    <mt-popup
    v-model="popupVisible"
    position="bottom"
    class="chooseAddrPop">
      <div class="popTitle">
        <span>选择收货地址</span>
        <span class="newAddr" @click="newAddr">新增</span>
      </div>
      <mt-cell v-for="(item,index) in addrData" :key="index"  :title="item.address" :label="secondLine(item)" @click.native="addrClick(item)">
      </mt-cell>
    </mt-popup>
  </div>
</template>

<script>

export default {
  name: "AddrPop",
  props: {
    popVisible: Boolean,
    addrData:  Array
  },
  data() {
    return {
      popupVisible: this.popVisible,  
    }
  },
  methods: {
    addrChoose() {
      this.popupVisible = true
    },
    addrClick(item) {
      this.$emit('addrReturn',item)
      this.popupVisible = false
    },
    secondLine(item) {
      return item.name +' '+ item.tel
    },
    newAddr() {
      this.$router.push('/newadd')
    }
  }
}
</script>

<style scoped>
  .chooseAddrPop {
    width: 100%;
    height: 60%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .chooseAddrPop img {
    height: 24px;
  }
  .chooseAddrPop .popTitle {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    margin-bottom: 10px;
  }
  .chooseAddrPop .popTitle .newAddr{
    position: absolute;
    right: 15px;
    color: var(--color-theme);
  }
</style>