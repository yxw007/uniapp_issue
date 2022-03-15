<template>
	<Sub>
		<template #first="{ item }">
			<view class="item"> xxx {{ item.name }} </view>
		</template>
	</Sub>
</template>

<script>
export default {
	onLaunch: function() {
		console.log("App Launch");
	},
	onShow: function() {
		console.log("App Show");
	},
	onHide: function() {
		console.log("App Hide");
	},
};
</script>
