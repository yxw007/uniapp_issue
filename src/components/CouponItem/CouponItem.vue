<template>
  <view class="wrapper">
    <view class="wrapper__left">
      <view class="left__bg">
        <image src="@/static/image/coupon.png" />
      </view>
      <view class="left__discount"> <text>￥</text> {{ data.discount }}</view>
      <view class="left__minconsume">满{{ data.min_consume }}元可用</view>
    </view>
    <view class="wrapper__right">
      <view class="right__name">{{ data.name }}</view>
      <view class="right__date">{{ data.start_time }}-{{ data.end_time }}</view>
      <view class="right__tips">{{ data.tips }}</view>
      <slot name="right__tail">
        <!-- <RadioItem v-if="enableEdit" v-model="checked" class="right__radio"></RadioItem> -->
      </slot>
    </view>
  </view>
</template>

<script setup name="CouponItem">
import { ref, toRefs } from "vue";

const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
  enableEdit: {
    type: Boolean,
    default: false,
  },
});

const checked = ref(true);

const { data } = toRefs(props);
</script>

<style lang="scss" scoped>
.wrapper {
  height: 180rpx;
  display: flex;

  &__left {
    position: relative;
    width: 240rpx;
    height: 180rpx;
    box-sizing: border-box;
    text-align: center;
    color: $text-color-white;

    .left__bg {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      right: 0;

      /* image {
        width: 100%;
        height: 100%;
      } */
    }

    .left__discount {
      position: relative;
      display: block;
      margin: 0 auto;
      font-size: $text-size-24;
      padding-top: 32rpx;
      padding-bottom: 19rpx;
      font-weight: bold;

      /* text {
        font-size: 12rpx;
      } */
    }

    .left__minconsume {
      position: relative;
      display: block;
      margin: 0 auto;
      font-size: $text-size-14;
      white-space: nowrap;
    }
  }

  &__right {
    width: calc(100% - 240rpx);
    height: 100%;
    padding: 24rpx 32rpx;
    position: relative;
    box-sizing: border-box;
    background-color: $container-bg-color;
    border-radius: 0px 20rpx 20rpx 0px;

    .right__name {
      font-size: $text-size-16;
      color: $text-main-color;
      font-weight: bold;
      margin-bottom: 34rpx;
    }
    .right__date {
      font-size: $text-size-10;
      color: $text-grey-color;
      margin-bottom: 12rpx;
    }
    .right__tips {
      font-size: $text-size-10;
      color: $text-main-color;
    }
    .right__radio {
      display: block;
      position: absolute;
      right: 32rpx;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
