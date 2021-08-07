<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{ tag }}
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop() readonly dataSource: string[] | undefined;
  selectedTags: string[] = [];//空数组

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  toggle(tag: string) {//开关
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {//取消选中
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags)
  }

  create() {
    const name = window.prompt('请输入标签名');
    if (name === '') {
      window.alert('标签名不能为空');
    } else {
      if (this.dataSource) {
        this.$emit('update:dataSource', [...this.dataSource, name]);
      }
    }
  }
}
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
    flex-wrap: wrap; //换行

    > li {
      $bg: #d9d9d9;
      background: $bg;
      $h: 24px; //使用声明变量的方法
      height: $h; //只有一行的情况下才能用height=line-height来居中
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px; //右边距
      margin-top: 4px;

      &.selected { //选中后变化
        background: darken($bg, 50%);
        color: white;
      }
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