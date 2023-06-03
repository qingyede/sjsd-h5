<template>
  <!-- 附近商家 -->
  <div class="nearshop">
    <!-- 附近商家商品内容展示 -->
    <div class="nearshopping">
      <div class="nearshopping-zuo">
        <slot name="img"></slot>
      </div>
      <div class="nearshopping-you">
        <div class="nearshopping-you-yi">
          <div class="nearshopping-you-yi-zuo">
            <span class="nearshopping-you-yi-zuo-yi"
              ><slot name="premium"></slot
            ></span>
            <span class="nearshopping-you-yi-zuo-er"
              ><slot name="name"></slot
            ></span>
          </div>
          <div class="nearshopping-you-yi-you"><span>保准票</span></div>
        </div>
        <div class="nearshopping-you-er">
          <div class="nearshopping-you-er-zuo">
            <div class="nearshopping-you-er-zuo-yi">
              <span class="el-icon-star-on"></span>
              <span class="el-icon-star-on"></span>
              <span class="el-icon-star-on"></span>
              <span class="el-icon-star-on"></span>
              <span class="el-icon-star-on"></span>
            </div>
            <div class="nearshopping-you-er-zuo-er"><span>4.7</span></div>
            <div class="nearshopping-you-er-zuo-san">
              <span>月售666</span>
            </div>
          </div>
          <div class="nearshopping-you-er-you">
            <div class="nearshopping-you-er-you-yi">
              <span><slot name="bird"></slot></span>
            </div>
            <div class="nearshopping-you-er-you-er">
              <span>准时达</span>
            </div>
          </div>
        </div>
        <div class="nearshopping-you-san">
          <div class="nearshopping-you-san-zuo">
            <span><slot name="money"></slot></span>
          </div>
          <div class="nearshopping-you-san-you">
            <div class="nearshopping-you-san-you-wai">
              <slot name="zuo"></slot>
              <span> <slot name="you"></slot></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  mounted() {
    // console.log(this.nearshoplist)
  },
  computed: {
    ...mapState('homevuex', ['nearshoplist'])
  },
  methods: {}
}
</script>

<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.nearshop[data-v-c5632a86]:last-child {
  margin-bottom: 40.5px;
}
.nearshop {
  width: 100%;
  margin-top: -10px;

  .nearshopping {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 104px;
    border-bottom: 1px solid #5a977e;
    .nearshopping-zuo {
      width: 63.28px;
      height: 63.28px;
    }
    .nearshopping-you {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 283.767px;
      height: 70.4333px;
      .nearshopping-you-yi {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 16.8px;
        .nearshopping-you-yi-zuo {
          display: flex;
          align-items: center;
          flex: 6;
          height: 16.8px;
          .nearshopping-you-yi-zuo-yi {
            background-color: #5a977e;
            font-size: 12px;
            transform: scale(0.9);
            font-weight: 600;
            margin-right: 4px;
          }
          .nearshopping-you-yi-zuo-er {
            font-size: 15px;
          }
        }
        .nearshopping-you-yi-you {
          flex: 1.5;
          height: 16.8px;
          span {
            display: block;
            font-size: 12.5px;
            transform: scale(0.8);
            text-align: center;
            line-height: 14px;
            letter-spacing: 3px;
            border: 1px solid #3d6c5b;
          }
        }
      }
      .nearshopping-you-er {
        display: flex;
        align-items: center;
        width: 100%;
        height: 14.06px;
        line-height: 14.06px;
        .nearshopping-you-er-zuo {
          display: flex;
          align-items: center;
          flex: 5.5;
          .nearshopping-you-er-zuo-yi {
            font-size: 10px;
            letter-spacing: -4px;
            span {
              color: #ff9a0d;
              font-size: 13px;
            }
          }
          .nearshopping-you-er-zuo-er {
            padding-left: 8px;
            span {
              display: block;
              font-size: 15px;
              transform: scale(0.75);
              line-height: 10px;
              color: #ff9a0d;
            }
          }
          .nearshopping-you-er-zuo-san {
            margin-left: -5px;
            span {
              display: block;
              font-size: 10px;
              transform: scale(0.7);
              font-size: 15px;
              color: #ff9a0d;
            }
          }
        }
        .nearshopping-you-er-you {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex: 2;
          text-align: center;
          .nearshopping-you-er-you-yi {
            width: 50%;
            height: 100%;
            background-color: #5a977e;
            span {
              display: block;
              white-space: nowrap;
              font-size: 12px;
              transform: scale(0.75);
              margin-left: -3.5px;
            }
          }
          .nearshopping-you-er-you-er {
            width: 50%;
            height: 100%;
            span {
              display: block;
              font-size: 11px;
              transform: scale(0.7);
            }
          }
        }
      }
      .nearshopping-you-san {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 15.2px;
        .nearshopping-you-san-zuo {
          flex: 1;
          height: 100%;
          span {
            display: block;
            font-size: 13px;
            transform: scale(0.8);
            margin-left: -10px;
          }
        }
        .nearshopping-you-san-you {
          flex: 1;
          height: 100%;
          text-align: center;
          line-height: 100%;
          .nearshopping-you-san-you-wai {
            width: 100%;
            font-size: 13px;
            transform: scale(0.8);
            white-space: nowrap;
            span {
              color: #5a977e;
            }
          }
        }
      }
    }
  }
  .nearshopping:last-child {
    border-bottom: 0;
  }
}
</style>
