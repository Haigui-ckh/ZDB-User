<template>
  <div>
    <OnePageScroll>
      <template slot="centerword">举报页面</template>
      <van-cell-group title="请详细描述商家违规行为或内容">
        <van-field v-model="report.content" rows="3" autosize type="textarea"/>
        <van-field v-model="report.tel" type="tel" label="手机号" placeholder="在此输入您的手机号"/>
      </van-cell-group>

      <van-cell-group title="可在此上传证据图片">
        <van-uploader v-model="report.fileList" multiple />
      </van-cell-group>
      <div class="submitContainer">
        <van-button type="primary" block>点击提交</van-button>
      </div>
      
    </OnePageScroll>
  </div>
</template>

<script>
import OnePageScroll from '@/components/content/onepagescroll/OnePageScroll'
import { CellGroup, Field, Uploader, Button } from 'vant'


export default {
  name: "ReportSeller",
  components: {
    OnePageScroll,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Uploader.name]: Uploader,
    [Button.name]: Button
  },
  data() {
    return {
      report: {
        content: '',
        tel: '',
        fileList: [
          { url: 'https://img.yzcdn.cn/vant/leaf.jpg' }
        ],
      },

    }
  },
}
</script>

<style scoped>
.submitContainer {
  width: 95%;
  margin: 15px auto;
}
</style>