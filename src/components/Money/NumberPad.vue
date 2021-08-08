<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  @Prop() readonly value!: number;
  output  = '0';//输入为字符串

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  inputContent(event: MouseEvent) {//输入内容
    const button = (event.target as HTMLButtonElement);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const input = button.textContent!;//！把 空 排除
    if(this.output.length === 16){ return; }//如果 目前输出数字的长度已经等于16就停
    if(this.output === '0') {//默认为0
      if ('0123456789'.indexOf(input) >= 0) {//如果输入0123456789就替换之前
        this.output = input;
      }else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf('.') >= 0 && input === '.') {return;}//如果有一个‘.’就不能再打‘.
    this.output += input;
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  remove(){
    if (this.output.length === 1 ){
      this.output = '0';//如果输入框长度为1，那么输入框就显示0
    } else {//删掉当前的输入，减一位
      this.output = this.output.slice(0, -1);
    }
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  clear(){//如果点击clear清空，那么输入就为0
    this.output = '0';
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  ok(){//点ok的时候在触发事件
    this.$emit('update:value', this.output);
    this.$emit('submit', this.output);
    this.output ='0';
  }//当ok被点击的时候再触发一个事件

}
</script>

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
    height: 72px;
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

</style>