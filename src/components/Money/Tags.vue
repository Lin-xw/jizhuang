<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Tags"
};
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;//换行

    > li {
      background: #d9d9d9;
      $h: 24px; //使用声明变量的方法
      height: $h; //只有一行的情况下才能用height=line-height来居中
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px; //右边距
      margin-top: 4px;
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: transparent; //去掉背景
      border: none; //去掉边框
      color: #999;
      border-bottom: 1px solid; //添加下划线
      padding: 0 4px; //延长下划线长度
    }
  }
}
;
</style>