<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">//不能加scoped，不加就是影响整个页面
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;//关联苹果系统
  color: #333;
  line-height: 1.5;
  font-family: $font-hei;
}

</style>
