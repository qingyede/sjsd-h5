<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <Navpage>
      <!-- 左插槽 -->
      <template #zuo-yi>
        <div>
          <span class="el-icon-search"></span>
        </div>
      </template>
      <!-- 中插槽 -->
      <template #zhong-er>
        <div>
          {{ routerinfo.name }}
        </div>
      </template>
      <!-- 右插槽 -->
      <template #you-san>
        <div>
          <span>登陆|注册</span>
        </div>
      </template>
    </Navpage>

    <!-- 主体部分 -->
    <div class="main">
      <!-- 轮播图 -->
      <div class="swiper-top">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#3d6c5b">
          <!-- 轮播图一 -->
          <van-swipe-item>
            <!-- 菜单1推荐 -->
            <div class="menus">
              <div
                class="menus-span"
                v-for="(item1, index) in swiper1"
                :key="index"
                @click="toslider(item1)"
              >
                <div class="menus-box">
                  <div class="menus-top">
                    <img
                      :src="' https://fuss10.elemecdn.com' + item1.image_url"
                      alt=""
                    />
                  </div>
                  <div class="menus-bottom">{{ item1.title }}</div>
                </div>
              </div>
            </div>
          </van-swipe-item>
          <!-- 轮播图二-->
          <van-swipe-item>
            <!-- 菜单推荐2 -->
            <div class="menus">
              <div
                class="menus-span"
                v-for="item2 in swiper2"
                :key="item2.id"
                @click="toslider(item2)"
              >
                <div class="menus-box">
                  <div class="menus-top">
                    <img
                      :src="`https://fuss10.elemecdn.com${item2.image_url}`"
                      alt=""
                    />
                  </div>
                  <div class="menus-bottom">{{ item2.title }}</div>
                </div>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 附近商家top -->
      <div class="nearshop-top">
        <div class="nearshop-top-yi">
          <span class="el-icon-office-building"></span>
        </div>
        <div class="nearshop-top-er"><span>附近商家</span></div>
      </div>
      <div class="shopcontainer">
        <Shoppage v-for="(shop, index) in nearshoplist" :key="index">
          <template #premium>
            <div v-if="nearshoplist[index].is_premium">品牌</div>
          </template>

          <template #img>
            <div>
              <van-image
                lazy-load
                show-loading
                :src="
                  'http://elm.cangdu.org/img/' + nearshoplist[index].image_path
                "
              />
            </div>
          </template>

          <template #name>
            <div>
              {{ nearshoplist[index].name }}
            </div>
          </template>

          <template #bird>
            <div>
              {{ nearshoplist[index].delivery_mode.text }}
            </div>
          </template>

          <template #zuo>
            <div class="block">
              {{ nearshoplist[index].distance }}
            </div>
          </template>

          <template #you>
            <span>
              {{ nearshoplist[index].order_lead_time }}
            </span>
          </template>

          <template #money>
            <div>
              ￥66起送 /{{ nearshoplist[index].piecewise_agent_fee.tips }}
            </div>
          </template>
        </Shoppage>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
import { Image as VanImage } from 'vant'
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(SwipeItem)
Vue.use(VanImage)
export default {
  data() {
    return {
      num: 0,
      //第一个轮播图数据
      swiper1: [],
      //第二个轮播图数据
      swiper2: []
    }
  },
  mounted() {
    //得到推荐菜单
    this.getmenus()
    //初始化轮播图数据
    this.initswiperdata()
    // console.log(this.routerinfo)
    //得到当前经纬度的附近商铺
    this.nearshop({
      latitude: 31.22967,
      longitude: 121.4762
    })
    // console.log(this.nearshoplist)
  },
  computed: {
    ...mapState('shouyevuex', ['routerinfo']),
    ...mapState('homevuex', ['menusdata', 'nearshoplist'])
  },
  methods: {
    //得到推荐菜单
    ...mapActions('homevuex', ['getmenus', 'nearshop']),
    //初始化轮播图数据
    initswiperdata() {
      this.menusdata.forEach((item, index) => {
        if (index < 8) {
          this.swiper1.push(item)
        } else {
          this.swiper2.push(item)
        }
      })
    },
    //跳转到slider页面
    toslider(index) {
      this.$store.commit('homevuex/TOLSIDERMSG', index)
      this.$router.push({ name: 'slider' })
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding-top: 25px;
  padding-left: 5px;
  padding-right: 5px;
}
.menus {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 172.967px;
  transition: all, 0.6s;
  border-radius: 22px;

  .tab {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 1px;
    left: 50%;
    transform: translateX(-50%);
    width: 35px;
    height: 12px;
    padding: 3px;
    .tab-span {
      width: 9px;
      height: 9px;
      background-color: #3d6c5b;
      border-radius: 50%;
    }
  }
  .menus-span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 88.7px;
    height: 86.4833px;

    .menus-box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 51.53px;
      height: 72.41px;
      padding: 3.5px;
      text-align: center;
      .menus-top {
        width: 42.18px;
        height: 42.18px;
        line-height: 42.18px;
      }
      .menus-bottom {
        width: 51.53px;
        height: 16.8px;
        line-height: 16.8px;
        font-size: 12px;
        transition: all, 0.6s;
      }
    }
  }
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-top {
  width: 100%;
}
.my-swipe .van-swipe-item {
  width: 100%;
  height: 100%;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  border-radius: 22px;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow: 5px 5px 10px #d6d6d6, -5px -5px 10px #ffffff;
}
.van-swipe {
  border-radius: 22px;
}
.nearshop-top {
  display: flex;
  align-items: center;
  height: 32px;
  border-top: 2px solid #5a977e;
  padding-left: 5px;
  padding-bottom: 6px;
  margin-bottom: -10px;
  margin-top: 15px;
  .nearshop-top-yi {
    width: 14px;
    height: 14px;
    margin-right: 5px;
    span {
      color: #3d6c5b;
      font-size: 20px;
    }
  }
  .nearshop-top-er {
    width: 60px;
    height: 16.8px;
    line-height: 20px;
    span {
      display: block;
      color: #3d6c5b;
      font-size: 14px;
      transform: scale(0.8);
    }
  }
}
.block {
  display: inline-block;
}
</style>
