<template>
  <div class="index-container">
    <!-- 导航栏 -->
    <div class="navigitor">
      <div class="zuo">随叫随到<span>^_^</span></div>
      <div class="you">登录/注册</div>
    </div>

    <div class="mian">
      <!-- 当前定位城市 -->
      <div class="localcity">
        <div class="zuo">当前定位城市</div>
        <div class="you">定位不准时 请在城市列表中选择</div>
      </div>
      <!-- 当前具体城市 -->
      <div class="detailcity" @click="todetailarea">
        <div class="zuo">{{ currentpositioncity.name }}</div>
        <div class="you"><span class="el-icon-arrow-right"></span></div>
      </div>
      <!-- 热门城市 -->
      <div class="hotcity">
        <div class="top">
          <div class="zuo-hotcity">热门城市</div>
        </div>
        <div class="bottom">
          <span
            @click="todetailarea2(item.id)"
            v-for="item in hotcityList"
            :key="item.id"
            >{{ item.name }}</span
          >
        </div>
      </div>
      <!-- 按字母排序 -->
      <div
        class="zimu-city"
        v-for="(item, key, index) in allcityList"
        :key="index"
      >
        <div class="top">{{ key }} <span class="xiao">(按字母排序)</span></div>
        <div class="bottom">
          <span
            @click="todetailarea2(item2.id)"
            v-for="item2 in item"
            :key="item2.id"
            >{{ item2.name }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'IndexPage',
  data() {
    return {}
  },
  mounted() {
    this.hotcity()
    this.positioncity()
    this.allcity()
  },
  computed: {
    ...mapState('shouyevuex', [
      'hotcityList',
      'allcityList',
      'currentpositioncity'
    ])
  },
  methods: {
    //派发热门城市的任务
    ...mapActions('shouyevuex', ['hotcity', 'positioncity', 'allcity']),
    //带着参数跳转到搜索页面
    todetailarea() {
      const data = { id: this.currentpositioncity.id }
      this.$router.push({ name: 'area', query: { Id: data.id } })
    },
    //带着参数跳转到搜索页面
    todetailarea2(id) {
      this.$router.push({ name: 'area', query: { Id: id } })
    }
  }
}
</script>

<style lang="less" scoped>
.navigitor {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45.7px;
  font-size: 13.5px;
  text-align: center;
  background: #1f4037; /* fallback for old browsers */
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
    width: 80px;
    height: 16.5px;
    line-height: 16.5px;
    span {
      color: pink;
      font-size: 10px;
    }
  }
  .you {
    width: 70px;
    height: 20px;
    line-height: 20px;
    padding-right: 6px;
  }
}
.mian {
  width: 100%;
}
.localcity {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 34px;
  margin-top: 52px;
  line-height: 34px;
  font-size: 10px;
  padding-left: 6px;
  padding-right: 6px;
  .zuo {
    width: 90.18px;
    height: 100%;
    font-size: 12px;
  }
  .you {
    width: 175px;
    height: 100%;
    color: gray;
    transform: scale(0.8);
    font-size: 12px;
  }
}
.detailcity {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 42.18px;
  text-align: center;
  border-top: 1px solid rgba(100, 164, 137, 0.4);
  border-bottom: 1px solid rgba(100, 164, 137, 0.4);
  padding-left: 6px;
  padding-right: 6px;
  .zuo {
    width: 35.16px;
    height: 42.18px;
    line-height: 42.18px;
    color: #64a489;
    font-size: 15px;
  }
  .you {
    width: 14px;
    height: 14px;
    line-height: 14px;
    color: #1f4037;
  }
}
.hotcity {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 118.41px;
  margin-top: 9px;
  border-top: 1px solid rgba(100, 164, 137, 0.4);
  .top {
    width: 100%;
    height: 36.38px;
    line-height: 36.38px;
    font-size: 15px;
    padding-left: 6px;
    padding-right: 6px;
    color: #666666;
  }
  .bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 82.03px;
    border-top: 1px solid rgba(100, 164, 137, 0.4);
    span {
      width: 25%;
      height: 41px;
      text-align: center;
      line-height: 41px;
      color: #64a489;

      border-left: 1px solid rgba(100, 164, 137, 0.4);
      border-bottom: 1px solid rgba(100, 164, 137, 0.4);
      &:nth-child(1),
      &:nth-child(5) {
        border-left: 0;
      }
      &:nth-child(4),
      &:nth-child(8) {
        border-right: 0;
      }
    }
  }
}
.zimu-city {
  display: flex;
  flex-direction: column;
  width: 100%;
  // background-color: red;
  margin-top: 10px;
  font-size: 15px;
  .top {
    position: relative;
    width: 100%;
    height: 37.18px;
    line-height: 37.18px;
    // font-size: 12px;
    padding-left: 6px;
    border: 1px solid rgba(100, 164, 137, 0.4);
    .xiao {
      position: absolute;
      top: 1px;
      left: 12px;
      display: block;
      color: #64a489;
      // font-size: 12px;
      transform: scale(0.8);
    }
  }
  .bottom {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    width: 100%;
    span {
      width: 25%;
      height: 41px;
      border: 1px solid rgba(100, 164, 137, 0.4);
      text-align: center;
      line-height: 41px;
      border-left: 0;
      border-top: 0;
      color: #666666;
      // font-size: 12px;
    }
  }
}
</style>
