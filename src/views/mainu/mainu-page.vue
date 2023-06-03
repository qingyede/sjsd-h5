<template>
  <div class="mainu-container">
    <Navpage>
      <!-- 左插槽 -->
      <template #zuo-yi>
        <div @click="$router.back()">
          <span class="el-icon-arrow-left"></span>
        </div>
      </template>
      <!-- 中插槽 -->
      <template #zhong-er>
        <div>订单列表</div>
      </template>
    </Navpage>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
