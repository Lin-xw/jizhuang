<template>
  <label class="notes">
    <span class="name">备注</span>
    <input type="text" placeholder="在这里输入备注">
  </label>
</template>

<script lang="ts">
export default {
  name: "Notes"
};
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  padding-left: 16px; //固定左边宽16
  background: #f5f5f5;
  display: flex; //左右布局
  align-items: center; //居中
  .name {
    padding-right: 16px; //右间距
  }

  input {
    height: 64px;
    background: transparent; //去掉背景
    border: none; //去掉边框
    flex-grow: 1; //尽量最大宽
    padding-right: 15px;
  }
}

</style>