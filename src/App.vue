<template>
  <Sub>
    <template #first="{ item }">
      <view class="item"> xxx {{ item.name }} </view>
    </template>
  </Sub>
</template>

<script setup>
/* export default {
	onLaunch: function() {
		console.log("App Launch");
	},
	onShow: function() {
		console.log("App Show");
	},
	onHide: function() {
		console.log("App Hide");
	},
}; */

import { onMounted } from "vue";

onMounted(() => {
  console.log("onMounted:APP");
});
</script>
