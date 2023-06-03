<template>
  <div class="nav-container">
    <div class="nav">
      <div class="zuo"><slot name="zuo-yi"></slot></div>
      <div class="zhong"><slot name="zhong-er"></slot></div>
      <div class="you"><slot name="you-san"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {}
}
</script>

<style lang="less" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  width: 100%;
  height: 45.7px;
  background: #1f4037; /* fallback for old browsers */
  padding-left: 8px;
  padding-right: 8px;
  background: -webkit-linear-gradient(
    to right,
    #99f2c8,
    #1f4037
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #99f2c8,
    #1f4037
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  .zuo {
    width: 21.1px;
    height: 21.1px;
    text-align: center;
    line-height: 21.1px;
    font-size: 18px;
  }
  .zhong {
    height: 24.8px;
    text-align: center;
    line-height: 24.8px;
    padding-left: 35px;
    font-size: 16px;
  }
  .you {
    width: 65px;
    height: 20px;
    font-size: 13.5px;
    line-height: 20px;
  }
}
</style>
