<template>
  <Layout class-prefix="layout">
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">OK</button>
        <button class="zero">0</button>
        <button>.</button>
      </div>
    </div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里输入备注">
    </label>
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
  </Layout>
</template>

<script lang="ts">
export default {
  name: 'Money',
};
</script>

<style lang="scss">
  .layout-content{
    border: 3px solid red;
    display: flex;
    flex-direction: column-reverse;
  }
</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace; //等宽字体
    padding: 9px 16px;
    text-align: right;
  }
    .buttons {
      @extend %clearFix;

      > button {
        width: 25%; //每个按键是总宽的25%
        height: 64px;
        float: left; //float布局
        background: transparent; //背景透明
        border: none; //去掉边框
        &.ok {
          height: 64*2px;
          float: right;
        }

        &.zero {
          width: 25*2%;
        }

        $bg: #f2f2f2;

        &:nth-child(1) {
          background: $bg;
        }

        &:nth-child(2), &:nth-child(5), {
          background: darken($bg, 4%);
        }

        &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: darken($bg, 4*2%);
        }

        &:nth-child(4), &:nth-child(7), &:nth-child(10),
        &:nth-child(13) {
          background: darken($bg, 4*3%);
        }

        &:nth-child(8), &:nth-child(11), &:nth-child(13) {
          background: darken($bg, 4*4%);
        }

        &:nth-child(12) {
          background: darken($bg, 4*6%);
        }

        &:nth-child(14) {
          background: darken($bg, 4*5%);
        }
      }
    }
  }

.types {
  background: #c4c4c4;
  display: flex; //flex布局搞定所有东西
  text-align: center; //字体排列居中
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center; //左右居中
    align-items: center; //上下居中
    position: relative; //相对定位
    &.selected::after { //当前下的selected
      content: '';
      position: absolute; //绝对定位
      bottom: 0;
      width: 100%;
      height: 4px;
      background: #333333;
    }
  }

}

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