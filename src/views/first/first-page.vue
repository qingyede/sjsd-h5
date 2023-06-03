<template>
  <div class="first-container">
    <!-- 子路由占位符 -->
    <router-view></router-view>
    <!-- footer -->
    <div class="footer">
      <div class="footer-yi" @click="num = 0">
        <router-link to="/first/home">
          <div class="span">
            <div class="span-top">
              <span
                class="el-icon-eleme"
                :class="num === 0 ? 'activeclass' : ''"
              ></span>
            </div>
            <div class="span-bottom"><span>外卖</span></div>
          </div></router-link
        >
      </div>
      <div class="footer-er" @click="num = 1">
        <router-link to="/first/search">
          <div class="span">
            <div class="span-top">
              <span
                class="el-icon-discover"
                :class="num === 1 ? 'activeclass' : ''"
              ></span>
            </div>
            <div class="span-bottom"><span>搜索</span></div>
          </div></router-link
        >
      </div>
      <div class="footer-san" @click="num = 2">
        <router-link to="/first/mainu">
          <div class="span">
            <div class="span-top">
              <span
                class="el-icon-tickets"
                :class="num === 2 ? 'activeclass' : ''"
              ></span>
            </div>
            <div class="span-bottom"><span>订单</span></div>
          </div></router-link
        >
      </div>
      <div class="footer-si" @click="num = 3">
        <router-link to="/first/my">
          <div class="span">
            <div class="span-top">
              <span
                class="el-icon-user"
                :class="num === 3 ? 'activeclass' : ''"
              ></span>
            </div>
            <div class="span-bottom"><span>我的</span></div>
          </div></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0
    }
  },
  mounted() {
    // console.log(this.$route.query.cityinfo)
  }
}
</script>

<style lang="less" scoped>
.first-container {
  width: 100%;
  height: 100%;
  padding-top: 25px;
  padding-left: 5px;
  padding-right: 5px;

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 45.7px;
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: rgba(134, 188, 164);
    line-height: 45.7px;
    text-align: center;
    border-top: 1px solid transparent;
    box-shadow: 1px 1px 5px rgb(132, 129, 129);

    .span {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 26.65px;
      height: 40.25px;
      // background-color: red;
      margin: auto;
      .span-top {
        position: relative;
        width: 26.65px;
        height: 26.65px;
        line-height: 26.65px;
        span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 18.75px;
          height: 18.75px;
          line-height: 27px;
          font-size: 22px;
          margin-top: -5px;
          color: #fff;
        }
      }
      .span-bottom {
        width: 30px;
        height: 13.6px;
        line-height: 13.6px;
        span {
          display: block;
          width: 100%;
          height: 100%;
          font-size: 15px;
          transform: scale(0.8);
          color: #303133;
        }
      }
    }
    .footer-yi {
      flex: 1;
    }
    .footer-er {
      flex: 1;
    }
    .footer-san {
      flex: 1;
    }
    .footer-si {
      flex: 1;
    }
  }
}
.activeclass {
  color: rgb(5, 199, 228) !important;
}
</style>
