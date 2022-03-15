<template>
	<view>
		test page
		<Sub>
			<template #first="{ item }">
				<view class="item"> xxx {{ item.name }} </view>
			</template>
		</Sub>
	</view>
</template>

<script>
import Sub from "./sub.vue";

export default {
	components: {
		Sub,
	},
	onLoad() {},
};
</script>
