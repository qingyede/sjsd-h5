<template>
  <div class="slider-container">
    <!-- 头部 -->
    <Navpage>
      <template #zuo-yi>
        <div @click="$router.back()">
          <span class="el-icon-arrow-left"></span>
        </div>
      </template>

      <template #zhong-er>
        <div>
          {{ slidermsg.title }}
        </div>
      </template>
    </Navpage>
    <!-- 排序 -->
    <Sliderdown></Sliderdown>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>666</h1>
    <h1>222</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState('homevuex', ['slidermsg'])
  },
  mounted() {
    // console.log(this.slidermsg)
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.slider-container {
  padding-top: 70px;
}
</style>
