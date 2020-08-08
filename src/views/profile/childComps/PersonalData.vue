<template>
  <div id="personal-data">
    <!-- 个人资料 -->
    <div id="profile-picture">
      <img src="~assets/img/profile/tx1.jpg">
    </div>
    <span id="username">芒芒</span>
    <div id="reward-points">
      <!-- <div id="reward-points-">积分余额</div> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: "PersonalData"
  }
</script>

<style scoped>
  #personal-data {
    background-color: white;
    display: flex;
    flex-wrap: wrap;

    padding: 0 20px;
    margin: 0 auto ;

    border-radius: 5px;
    border-top: 10px solid #f6f6f6;
    border-width: 10px 0;
  }
  #profile-picture {
    width: 20%;
    text-align: center;
    margin: 10px 0;
  }
  #profile-picture img {
    width: 80%;
    border-radius: 50%;
  }
  #username {
    font-size: 0.8rem;
    margin-left: 15px;
    padding-top: 15px;
  }
  #reward-points {
    width: 100%;
  }
</style>