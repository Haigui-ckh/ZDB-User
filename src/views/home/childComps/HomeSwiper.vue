<template>
  <div id="home-swiper">
    <swiper>
      <swiper-item>
        <a href="#">
          <img src="~assets/img/swiper/b1.png" alt="">
        </a>
      </swiper-item>
      <swiper-item>
        <a href="#">
          <img src="~assets/img/swiper/b2.jpg" alt="">
        </a>
      </swiper-item>
      <swiper-item>
        <a href="#">
          <img src="~assets/img/swiper/b3.jpg" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  #home-swiper {
    width: 100%;
  }
</style>