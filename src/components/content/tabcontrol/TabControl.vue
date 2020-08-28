<template>
  <div class="tab-control">
    <div  v-for="(item,index) in titles" :key="item" 
    class="tab-control-item" :class="{active: index === currentIndex}"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    },
    activeIndex: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  created() {
    if(this.$route.query.serviceid){
      this.currentIndex = this.$route.query.serviceid;
    }
    // 若是返回到tabcontrol页面，则使用之前的activeIndex
    this.currentIndex = this.activeIndex
  },
  mounted() {
    
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index);
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    font-size: 0.8rem;
    height: 40px;
    line-height: 40px;
  }
  .tab-control-item{
    flex: 1;
  }
  .active{
    color:#FF9900
  }
  .active span{
    padding: 5px;
    border-bottom: 3px solid #FF9900;
  }
</style>