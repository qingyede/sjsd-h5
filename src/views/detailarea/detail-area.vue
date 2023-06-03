<template>
  <div class="dedailarea-container">
    <!-- 导航栏 -->
    <div class="nav">
      <div class="zuo" @click="$router.back()">
        <span class="el-icon-arrow-left"></span>
      </div>
      <div class="zhong">{{ currentidcity.name }}</div>
      <div class="you" @click="$router.back()">切换城市</div>
    </div>
    <!-- 搜索具体地址 -->
    <div class="detailarea">
      <div class="top">
        <input
          type="text"
          placeholder="输入学校、商务楼、地址"
          @input="inputing(keyword)"
          v-model="keyword"
        />
      </div>
      <div class="bottom">提交</div>
    </div>
    <!-- 搜索结果展示 -->
    <div class="rsshowzong" v-if="keyword !== ''">
      <div
        class="sousuoshow"
        v-for="(item, index) in sousuorscity"
        :key="index"
        @click="tohome(item)"
      >
        <div class="rsshow">
          <div class="rsshow-top">{{ item.name }}</div>
          <div class="rsshow-bottom">
            <span>{{ item.address }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="sousuoshang" v-else>
      <!-- 搜索历史nav展示 -->
      <div class="userhistory"><span>搜索历史</span></div>
      <div
        class="sousuo-father"
        v-for="(item, index) in savecity"
        :key="index"
        @click="tohome2(item)"
      >
        <!-- 搜索历史展示 -->
        <div class="searchold">
          <div class="search-top">{{ item.name }}</div>
          <div class="search-bottom">
            <div class="nei">{{ item.address }}</div>
          </div>
        </div>
      </div>
      <!-- 清空历史 -->
      <div class="clear" @click="clearall" v-show="savecity !== null">
        清空所有
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      //顶部携带过来的城市数据
      navword: this.$route.query.Id,
      //实现搜索防抖的初始timer
      timer: null,
      //搜索关键字
      keyword: '',
      savecity: JSON.parse(localStorage.getItem('savacity'))
    }
  },
  computed: {
    ...mapState('shouyevuex', [
      'currentidcity',
      'sousuorscity',
      'localsavecity'
    ])
  },
  mounted() {
    this.getIdcity(this.navword)
  },
  methods: {
    ...mapActions('shouyevuex', ['getIdcity', 'inputing', 'savecityhandler']),
    ...mapMutations('shouyevuex', ['ROUTERINFO']),
    //点击跳转到首页
    tohome(item) {
      this.savecityhandler(item)
      this.ROUTERINFO(item)
      this.$router.push({
        path: '/first/home'
      })
    },
    //历史的跳转
    tohome2(item) {
      this.ROUTERINFO(item)
      this.$router.push({
        path: '/first/home'
      })
    },
    //清空历史
    clearall() {
      this.savecity = null
      localStorage.removeItem('savacity')
    }
  }
}
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45.7px;
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
  padding-left: 6px;
  padding-right: 6px;
  box-sizing: border-box;
  text-align: center;
  .zuo {
    width: 18px;
    height: 23.5px;
    line-height: 23.5px;
    [class*=' el-icon-'],
    [class^='el-icon-'] {
      font-size: 16.5px;
    }
  }
  .zhong {
    height: 24.8px;
    line-height: 24.8px;
    font-size: 16px;
    padding-left: 39.5px;
  }
  .you {
    width: 56.2px;
    height: 19.2px;
    font-size: 12px;
    line-height: 19.2px;
  }
}
.detailarea {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100.183px;
  padding-left: 15px;
  padding-right: 15px;
  line-height: 32.816px;
  .top {
    width: 100%;
    height: 32.816px;
    margin-top: 5px;
    input {
      width: 100%;
      height: 90%;
      outline: none;
      border: 1px solid #5a977e;
      text-indent: 5px;
    }
    &::placeholder {
      font-size: 15px;
      color: #000;
    }
  }
  .bottom {
    width: 100%;
    height: 32.816px;
    background-color: #5e9b81;
    text-align: center;
    font-size: 15px;
    color: #fff;
    padding-left: -9px;
  }
}
.userhistory {
  position: relative;
  width: 100%;
  height: 20.35px;
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid #5a977e;
  background-color: rgba(94, 155, 129, 0.2);
  span {
    position: absolute;
    top: -0.5px;
    left: 5px;
    display: block;
    color: #5a977e;
    font-size: 10px;
    transform: scale(0.7);
    line-height: 20.35px;
    font-size: 15px;
  }
}
.searchold {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 70.7167px;
  border: 1px solid #5a977e;
  padding: 16px;
  border-top: 0;
  box-sizing: border-box;

  .search-top {
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .search-bottom {
    position: relative;
    width: 100%;
    height: 13.6px;
    line-height: 13.6px;

    .nei {
      position: absolute;
      top: 1px;
      left: -50px;
      width: 100%;
      height: 100%;
      font-size: 16px;
      transform: scale(0.7);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: rgba(94, 155, 129, 0.8);
    }
  }
}
.clear {
  width: 100%;
  height: 46.8833px;
  text-align: center;
  line-height: 46.8833px;
  background-color: rgba(94, 155, 129, 0.2);
  color: #5a977e;
  font-size: 14px;
}
.sousuoshow {
  width: 100%;
  box-sizing: border-box;
  padding-left: 16px;
  padding-right: 16px;
  border: 1px solid #5a977e;
  border-bottom: 0;
  &:last-child {
    border-bottom: 1px solid #5a977e;
  }
  .rsshow {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 70.71px;
    box-sizing: border-box;
    .rsshow-top {
      width: 100%;
      height: 20px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 15px;
      line-height: 20px;
    }
    .rsshow-bottom {
      position: relative;
      width: 100%;
      height: 13.6px;
      margin-top: 5px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      span {
        position: absolute;
        top: 1px;
        left: -50px;
        width: 100%;
        height: 100%;
        line-height: 13.6px;
        font-size: 12px;
        transform: scale(0.7);
        color: rgba(94, 155, 129, 0.8);
      }
    }
  }
}
</style>
