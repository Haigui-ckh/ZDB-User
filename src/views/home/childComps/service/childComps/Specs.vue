<template>
  <div id="specs">
    <van-checkbox-group v-model="specsSelected" direction="horizontal" style="width:100%">
      <van-checkbox 
        :name="index" 
        v-for="(item, index) in specifications" 
        :key="item.id + item.name" 
        @click="selectSpec(index)"
        style="margin-bottom: 8px;font-size:12px">
        {{item.name}}</van-checkbox>
        
    </van-checkbox-group>
  </div>
</template>

<script>
	import { Checkbox, CheckboxGroup } from 'vant'


export default {
  name: "Specs",
  props: {
    specifications: Array
  },
  components: {
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      specsSelected: [],
      specsSelectedPrice: [ 0 ],
      specsSelectedId: [ 0 ],
    }
  },
  methods: {
    index2price(value, index, array) {
      return this.specifications[value].price
    },
    index2id(value, index, array) {
      return this.specifications[value].id
    },
    selectSpec(index) {
      // 规格价格数组生成
      if (this.specsSelected.length === 0) {
        this.specsSelectedPrice = [ 0 ]
      } else {
        this.specsSelectedPrice = this.specsSelected.map(this.index2price)
      }
      // 规格ID数组生成
      this.specsSelectedId = this.specsSelected.map(this.index2id)

      // 即时更新总价
      // this.deliveryData.total = this.totalPrice

      this.$emit('selectSpec',this.specsSelectedPrice, this.specsSelectedId)
    }

  }
}
</script>

<style scoped>
</style>