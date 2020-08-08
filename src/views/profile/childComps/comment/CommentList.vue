<template>
  <div class="ratings" ref="rateView">
    <div class="ratings-wrapper">
      <div class="content">
        <ul class="rating-list">
          <li
            v-for="(comment,index) in selectComments"
            :key="index"
            class="comment-item"
          >
            <div class="comment-header">
              <img :src="comment.user_pic_url" v-if="comment.user_pic_url" />
              <img src="~assets/img/profile/anonymity.png" v-if="!comment.user_pic_url"  />
            </div>
            <div class="comment-main">
              <div class="user">
                {{comment.user_name}}
              </div>
              <div class="time">
                {{formatDate(comment.comment_time)}}
              </div>
              <div class="star-wrapper">
                <span class="text">评分</span>
                <Star :score="comment.order_comment_score" class="star"></Star>
              </div>
              <div class="content">
                {{comment.comment}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios' 
  import BScroll from 'better-scroll'
  import Star from "views/merchants/components/star/Star"

  const ALL = 2
  const PICTURE = 1
  const COMMENT = 0
  export default {
    data() {
      return {
        ratings: {},
        selectType: ALL
      }
    },
    components: {
      Star
    },
    created() {
        axios({
          url: '/ratings.json'
          }).then(res => {
            this.ratings = res.data.data

            this.$nextTick(() => {
              if (!this.scroll) {
                this.scroll = new BScroll(this.$refs.rateView, {
                  click: true
                })
              } else {
                this.scroll.refresh()
              }
          })
        })

    },
    methods: {
      selectTypeFn(type) {
        this.selectType = type;
      },
      formatDate(time) {
        let date = new Date(time * 1000);
        let fmt = 'yyyy.MM.dd';
        if (/(y+)/.test(fmt)) { // 年
          let year = date.getFullYear().toString();
          fmt = fmt.replace(RegExp.$1, year);
        }
        if (/(M+)/.test(fmt)) { // 月
          let mouth = date.getMonth() + 1;
          if (mouth < 10) {
            mouth = '0' + mouth;
          }
          fmt = fmt.replace(RegExp.$1, mouth);
        }
        if (/(d+)/.test(fmt)) { // 日
          let mydate = date.getDate();
          if (mydate < 10) {
            mydate = '0' + mydate;
          }
          fmt = fmt.replace(RegExp.$1, mydate);
        }
        return fmt;
      }
    },
    computed: {
      selectComments() {
        if (this.selectType === ALL) {
          return this.ratings.comments
        } else if (this.selectType === PICTURE) {
          let arr = []
          this.ratings.comments.forEach((comment) => {
            if (comment.comment_pics.length) {
              arr.push(comment)
            }
          })
          return arr
        } else {
          return this.ratings.comments_dp.comments
        }
      }
    }
  }
</script>

<style scoped>
  .ratings {
    position: absolute;
    left: 0;
    top: 84px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    background-color: white;
    z-index: 9;
  }

  .ratings .ratings-wrapper .overview {
    padding: 20px 0 18px 0;
    display: flex;
  }

  .ratings .ratings-wrapper .content {
    padding: 16px;
  }

  .ratings .ratings-wrapper .content .rating-select {
    width: 100%;
    box-sizing: border-box;
    font-size: 0;
    border: 1px solid #FFB000;
    border-right: 0;
    margin-bottom: 11px;
    border-radius: 3px;
  }

  .ratings .ratings-wrapper .content .rating-select .item {
    width: 33.3%;
    display: inline-block;
    height: 33px;
    line-height: 33px;
    font-size: 14px;
    text-align: center;
    border-right: 1px solid #FFB000;
    box-sizing: border-box;
    color: #FFB000;
  }

  .ratings .ratings-wrapper .content .rating-select .item:last-child img {
    height: 14px;
    vertical-align: middle;
  }

  .ratings .ratings-wrapper .content .rating-select .item.active {
    background: #FFB000;
    color: black;
  }

  .ratings .ratings-wrapper .content .labels-view {
    /*margin-bottom: 14px;*/
  }

  .ratings .ratings-wrapper .content .labels-view .item {
    display: inline-block;
    height: 27px;
    line-height: 27px;
    padding: 0 10px;
    font-size: 12px;
    background: #F4F4F4;
    margin-right: 6px;
    margin-bottom: 6px;
    border-radius: 3px;
    color: #999999;
  }

  .ratings .ratings-wrapper .content .labels-view .item.highligh {
    color: #656565;
  }

  .ratings .ratings-wrapper .content .rating-list {
    padding: 0;
  }

  .ratings .ratings-wrapper .content .rating-list .comment-item {
    padding: 16px 16px 16px 0;
    border-bottom: 1px solid #F4F4F4;
    width: 100%;
    box-sizing: border-box;
    display: flex;
  }

  .ratings .ratings-wrapper .content .rating-list .comment-item .comment-header {
    flex: 0 0 35px;
    margin-right: 11px;
  }

  .ratings .ratings-wrapper .content .rating-list .comment-item .comment-header img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  .ratings .ratings-wrapper .content .rating-list .comment-item .comment-main {
    flex: 1;
  }

  .ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .user {
    width: 50%;
    float: left;
    font-size: 11px;
    color: #333333;
  }

  .ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .time {
    width: 50%;
    float: right;
    text-align: right;
    font-size: 9px;
    color: #666666;
  }

  .ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .star-wrapper {
    float: left;
    margin-top: 12px;
    margin-bottom: 15px;
    width: 100%;
  }

  .ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .star-wrapper .text {
    color: #999999;
    font-size: 11px;
    float: left;
  }

  .ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .star-wrapper .star {
    float: left;
    margin-left: 7px;
  }

  .ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .c_content {
    font-size: 13px;
    line-height: 19px;
    float: left;
    width: 100%;
  }

  .ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .c_content i {
    color: #576b95;
  }

  .ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .img-wrapper {
    margin-top: 9px;
    float: left;
  }

  .ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .img-wrapper img {
    width: 175px;
  }
</style>
