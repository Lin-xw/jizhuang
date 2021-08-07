<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'"
          @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'"
          @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">//TS组件
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';


@Component
export default class Types extends Vue {
  type = '-';
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  selectType(type: string) {//  type只能是'-' 和 '+'中的一个
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.type = type;
  }

  @Watch('type')//适合于在某个东西变化的时候用
  onTypeChanged(value: string) {
    this.$emit('update:value', value);
  }
}

</script>

<style lang="scss" scoped>
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

;
</style>