<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
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
import {Component, Watch} from 'vue-property-decorator';
import {model} from '@/model';

//初始化数据，数据从数据里拿出来
const recordList = model.fetch();

@Component({
  components: {Notes, Types, Tags, NumberPad}
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  // eslint-disable-next-line no-undef
  recordList: RecordItem[] = recordList;
  // eslint-disable-next-line no-undef
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };


  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onUpdateTags(value: string[]) {//每个组件都有回调
    this.record.tags = value;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onUpdateType(value: string) {
    this.record.type = value;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  saveRecord() {//先把它变成字符串，然后再创造出新的对象,生成record2
    // eslint-disable-next-line no-undef
    const record2 : RecordItem = model.clone(this.record);
    record2.createdAt = new Date()
    this.recordList.push(record2);//保存的时候永远都是保存它的副本，更新数据
  }

  @Watch('recordList')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onRecordListChange() {//保存数据，把数据存到一个地方
    model.save(this.recordList);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>