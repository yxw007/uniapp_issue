<template>
  <view class="wrapper">
    <view class="wrapper__top"> </view>
    <view class="wrapper__content">
      ---content---12
      <Sub v-for="(item, index) in records" :key="index" :data="item"></Sub>
      <!-- <OrderRecord
        v-for="(item, index) in records"
        :key="index"
        :data="item"
      ></OrderRecord> -->
    </view>
  </view>
</template>

<script setup name="index">
import Sub from "./Sub.vue";
import { useRecord } from "./index";
import OrderRecord from "./OrderRecord.vue";

const { records } = useRecord(6);
console.log("records:", records);
</script>

<style lang="scss" scoped>
.wrapper {
  display: block;

  .search {
    display: block;
    padding: 34rpx 24rpx 22rpx;
    background-color: $container-bg-color;
  }

  &__top {
    width: 100%;
    height: auto;
    position: fixed;
    left: 0;
    top: 100rpx;
  }

  &__content {
    padding-top: 216rpx;
  }

  .content__record {
    display: block;
    margin-bottom: 20rpx;
  }
}
</style>
