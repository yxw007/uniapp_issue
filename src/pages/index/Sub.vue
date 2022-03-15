<script>
export default {
	data() {
		return {
			items: [],
		};
	},
	mounted() {
		this.items = [{ name: "item1" }, { name: "item2" }, { name: "item3" }, { name: "item4" }, { name: "item5" }];
	},
};
</script>

<template>
	<view class="ul">
		<view v-for="(item, index) in items" :key="index" class="li">
			<slot v-if="index === 1" name="first" :item="item"></slot>
			<slot v-else name="other" :item="item"> other item {{ item.name }} </slot>
		</view>
	</view>
</template>

<style scoped>
.ul {
	list-style-type: none;
	padding: 5px;
	background: linear-gradient(315deg, #42d392 25%, #647eff);
}
.li {
	padding: 5px 20px;
	margin: 10px;
	background: #fff;
}
</style>
