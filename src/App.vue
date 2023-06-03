<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // color: #000;
  user-select: none;
}
body {
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
a {
  text-decoration: none;
}
.el-popper[x-placement^='bottom'] .popper__arrow {
  display: none;
}
</style>
