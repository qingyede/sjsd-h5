<template>
  <div class="slider">
    <!-- nav部分 -->
    <div class="nav">
      <div class="zuo" @click="change(1)">
        分类<span class="el-icon-caret-bottom"></span>
      </div>
      <div class="zhong" @click="change(2)">
        排序<span class="el-icon-caret-bottom"></span>
      </div>
      <div class="you" @click="change(3)">
        筛选<span class="el-icon-caret-bottom"></span>
      </div>
    </div>
    <!-- main部分 -->
    <div class="container">
      <Pulldown0></Pulldown0>
      <Pulldown1></Pulldown1>
      <Pulldown2></Pulldown2>
    </div>
  </div>
</template>

<script>
import Pulldown0 from '@/components/pulldown/pulldown-page.vue'
import Pulldown1 from '@/components/pulldown1/pulldown-page1.vue'
import Pulldown2 from '@/components/pulldown2/pulldown-page2.vue'
export default {
  data() {
    return {}
  },
  components: { Pulldown0, Pulldown1, Pulldown2 },
  computed: {},
  methods: {
    change(num) {}
  }
}
</script>

<style lang="less" scoped>
.slider {
  width: 100%;
  height: 375px;
  margin-top: -25px;
  .nav {
    display: flex;
    width: 100%;
    height: 37.5px;
    background-color: blue;
    .zuo,
    .zhong,
    .you {
      flex: 1;
      height: 100%;
      text-align: center;
      line-height: 37.5px;
      font-size: 15px;
      span {
        padding-left: 1.5px;
        color: #3d6c5b;
      }
    }
  }
}
.active1 {
  transform: rotate(180deg);
  transition: all 0.5s ease-out;
}
.active2 {
  transform: rotate(0deg);
  transition: all 0.5s ease-out;
}
// .pulldown1-enter-active {
//   transition: all 0.5s ease-out;
// }
</style>
