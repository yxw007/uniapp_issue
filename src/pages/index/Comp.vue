<template>
  <Popbottom>
    <template #top>
      <view class="top">
        <view class="top__title">优惠劵</view>
        <view class="top__tips" @tap.stop="directionVisible = true"
          ><text class="icon-shiyongshuoming"></text> 使用说明</view
        >
        <view class="top__close icon-guanbi" @tap.stop="emit('close')"></view>
      </view>
    </template>
    <template #content>
      <view class="body__content">
        <CouponItem
          v-for="(item, index) in datas"
          :key="index"
          :data="item"
          class="wrapper__item"
          @tap.stop="curChoiceIndex = index"
        >
          <template #right__tail>
            <!-- <RadioItem :model-value="index === curChoiceIndex"></RadioItem> -->
          </template>
        </CouponItem>
      </view>
      <view>确定</view>
    </template>
  </Popbottom>
</template>

<script setup name="use-coupon">
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

const props = defineProps({
  datas: {
    type: Array,
    default: [],
  },
  choiceIdx: {
    type: Number,
    default: 0,
  },
});
const curChoiceIndex = ref(0);
onLoad(() => {
  curChoiceIndex.value = props.choiceIdx;
});
const emit = defineEmits(["close", "confirm"]);
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  display: flex;
  align-items: center;

  .top__title {
    font-size: $text-size-18;
    color: $text-main-color;
    margin-right: 32rpx;
  }

  .top__tips {
    font-size: $text-size-12;
    color: $text-grey-color;
    flex-grow: 1;

    /*  text {
      padding-right: 8rpx;
    } */
  }

  .top__close {
    color: #999999;
    background-color: #f2f2f2;
    width: 48rpx;
    line-height: 48rpx;
    font-size: 10px;
    text-align: center;
    border-radius: 50%;
  }
}

.body__content {
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 32rpx;
  padding-bottom: 32rpx;

  .wrapper__item {
    display: block;
    background-color: #f6f7f9;
    border-radius: 0px 20rpx 20rpx 0px;
    position: relative;

    .item__button {
      position: absolute;
      right: 24rpx;
      top: 50%;
      transform: translateY(-50%);
      line-height: 48rpx;
      background: linear-gradient(90deg, #ff8a57, #fc253f);
      border-radius: 24rpx;
      padding: 0 24rpx;
      font-size: $text-size-12;
      color: $text-color-white;
    }

    .item__tips {
      color: $text-grey-color;
      font-size: $text-size-16;
      position: absolute;
      right: 24rpx;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
