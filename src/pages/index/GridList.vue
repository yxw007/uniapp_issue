<template>
  <view class="container">
    <view
      v-for="(item, index) in list"
      :key="item.id ? item.id : index"
      class="item"
    >
      <slot name="default" :data="item" />
    </view>
  </view>
</template>

<script setup name="GridList">
import { toRef } from "vue";

const props = defineProps({
  data: {
    type: Array,
    default: {},
  },
});

const list = toRef(props, "data");
console.log(list);
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(2, 1fr);
  gap: 20rpx;
  box-sizing: border-box;

  .item {
    width: 100%;
  }
}
</style>
