<template>
	<view class="wrapper">
		<view class="wrapper__bg" @tap.stop="emit('close')"> </view>
		<view class="wrapper__body">
			<view class="body__top">
				<slot name="top">
					<view class="top__title">{{ title }}</view>
					<view class="top__close icon-guanbi" @tap.stop="emit('close')"></view>
				</slot>
			</view>
			<view class="body__content">
				<slot name="content"> </slot>
			</view>
		</view>
	</view>
</template>

<script setup name="Popbottom">
import { toRefs } from "vue";

const props = defineProps({
	title: {
		type: String,
		default: "",
	},
});
const emit = defineEmits(["close"]);
const { title } = toRefs(props);
</script>

<style lang="scss" scoped>
.wrapper {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 100;

	&__bg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
	}

	&__body {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 896rpx;
		background-color: $container-bg-color;
		border-radius: 20rpx 20rpx 0px 0px;
		display: flex;
		flex-direction: column;
		padding: 0 32rpx 106rpx;
		box-sizing: border-box;

		.body__top {
			display: block;
			padding: 32rpx 0 52rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.top__title {
				font-size: $text-size-18;
				font-weight: bold;
				color: $text-main-color;
			}

			.top__close {
				font-size: $text-size-10;
				width: 48rpx;
				line-height: 48rpx;
				text-align: center;
				border-radius: 50%;
				background-color: #f2f2f2;
				color: #999;
			}
		}

		.body__content {
			display: block;
			flex-grow: 1;
		}
	}
}
</style>
