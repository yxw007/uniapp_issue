<template>
  <view @click="onClick">点击我</view>
</template>

<script setup>
import { getCurrentInstance } from "vue";
const { emit } = getCurrentInstance();
function onClick() {
  console.log("onClick");
  emit("xxx");
}
</script>

<style lang="scss" scoped>
</style>
