<template>
  <view @tap.stop="visible = true">点击我弹框</view>
  <Comp v-if="visible" class="Comp"></Comp>
</template>

<script setup name="index">
import { ref } from "vue";

import Comp from "./Comp.vue";

const visible = ref(false);
</script>

<style scoped>
.Comp {
  /* padding: 40px;
  border: 4px solid #0000ff;
  box-sizing: border-box; */
}
</style>
