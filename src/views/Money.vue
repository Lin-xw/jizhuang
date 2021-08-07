<template>
  <Layout class-prefix="layout">
    {{record}}
    <NumberPad @update:value="onUpdateAmout"/>
    <Types :value="record.type" @update:value="onUpdateType"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import {Component} from 'vue-property-decorator';
import {parse} from '@typescript-eslint/parser';

type Record = {
  tags: string[]
  notes: string
  type: string
  amount: number
}


@Component({
  components: {Notes, Types, Tags, NumberPad}
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  record: Record = {tags: [], notes: '', type: '-', amount: 0};

  onUpdateTags(value: string[]) {//每个组件都有回调
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateType(value: string) {
    this.record.type = value;
  }
  onUpdateAmout(value: string) {
    this.record.amount = parseFloat(value);
  }//因为amount是number，所以要加parseFloat
}
</script>

<style lang="scss">
.layout-content {
  border: 3px solid red;
  display: flex;
  flex-direction: column-reverse;
}
</style>