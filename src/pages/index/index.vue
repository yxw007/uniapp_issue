<template>
  <view>
    test page
    <ChildComp @xxx="onClickXXX"></ChildComp>
  </view>
</template>

<script>
import ChildComp from "./childComp.vue";
export default {
  components: {
    ChildComp,
  },
  onLoad() {},
  methods: {
    onClickXXX() {
      console.log("onClickXXX");
    },
  },
};
</script>
