<template>
	<view class="wrapper" @tap="emit('update:modelValue', !modelValue)">
		<view class="wrapper__icon" :style="{ border: modelValue ? 'none' : '2rpx solid #999999' }">
			<image v-if="modelValue" src="/static/svgs/checked.svg"></image>
		</view>
		<view v-if="label" class="wrapper__label">{{ label }}</view>
	</view>
</template>

<script setup name="RadioItem">
import { toRefs } from "vue";

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
	label: {
		type: String,
		default: null,
	},
});

const emit = defineEmits(["update:modelValue"]);

const { modelValue, label } = toRefs(props);
</script>

<style lang="scss" scoped>
.wrapper {
	display: inline-flex;
	line-height: 40rpx;

	&__icon {
		width: 40rpx;
		height: 40rpx;
		background: #ffffff;
		border-radius: 50%;
		box-sizing: border-box;
		position: relative;

		image {
			width: 100%;
			height: 100%;
		}
	}

	&__label {
		margin-left: 16rpx;
		font-size: $text-size-14;
		color: $text-main-color;
	}
}
</style>
