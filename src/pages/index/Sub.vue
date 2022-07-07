<template>
  <view class="wrapper">
    ---sub---
    <view class="wrapper__top">
      <view class="top__name">订单编号：{{ data.id }}</view>
      <!-- <view
        class="top__status"
        :style="{ color: getStatusColor(data.status) }"
        >{{ getStatusName(data.status) }}</view
      > -->
    </view>
    <view class="wrapper__content"> ddd</view>
  </view>
</template>

<script setup name="sub">
import { toRef } from "vue";
/* import { useStatusOptionStyle } from ".";

const { getStatusName, getStatusColor } = useStatusOptionStyle(); */

const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});

const data = toRef(props, "data");
console.error(data);
</script>

<style lang="scss" scoped>
.wrapper {
  display: block;
  padding: 32rpx;
  background-color: $container-bg-color;

  &__top {
    display: flex;
    justify-content: space-between;
    font-size: $text-size-16;
  }

  .top__name {
    color: $uni-text-color-grey;
  }

  .wrapper__content {
    display: flex;
    margin: 32rpx 0;
  }

  .content__list {
    width: calc(100% - 182rpx);

    .inner__list {
      display: flex;
      justify-content: flex-start;
      gap: 20rpx;

      image {
        width: 144rpx;
        height: 144rpx;
        border-radius: 10rpx;
      }
    }
  }

  .content__brief {
    display: flex;

    .brief__image {
      width: 144rpx;
      height: 144rpx;
      display: inline-block;
      margin-right: 24rpx;
      image {
        width: 100%;
        height: 100%;
        border-radius: 10rpx;
      }
    }

    .brief__middle {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .brief__name {
      font-size: $text-size-14;
      color: $text-main-color;
      max-height: 64rpx;
    }

    .brief__size {
      font-size: $text-size-12;
      color: $text-grey-color;
    }
  }

  .content__tail {
    width: 182rpx;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .tail__price {
      font-size: $text-size-14;
      color: $text-main-color;
      font-weight: bold;
    }

    .tail__num {
      font-size: $text-size-12;
      color: $text-grey-color;
      margin-top: 8rpx;
    }
  }

  &__bottom {
    display: flex;
    justify-content: flex-end;
    gap: 24rpx;
  }

  .bottom__left,
  .bottom__right {
    line-height: 60rpx;
    font-size: $text-size-14;
    padding: 0 28rpx;
    border-radius: 32rpx;
  }
}
</style>
