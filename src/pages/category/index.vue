<template>
  <!-- 设计我家 -->
  <view>
    <button type="default" @tap="jump">跳转到测试页面</button>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {},
  methods: {
    jump() {
      console.log("jump:跳转---------------");
    },
  },
};
</script>

<style scoped></style>
