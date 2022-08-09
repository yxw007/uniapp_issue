<script setup>
import { ref, computed } from "vue";
import GridList from "./GridList.vue";

const arr = ref([
  {
    id: 1,
    name: "1",
    selected: false,
  },
  {
    id: 2,
    name: "2",
    selected: false,
  },
]);

function deleteSelect() {
  arr.value = arr.value.filter((item) => !item.selected);
}

const selectAll = computed({
  get() {
    return arr.value.filter((item) => !item.selected).length <= 0;
  },
  set(val) {
    arr.value.forEach((item) => (item.selected = val));
  },
});
</script>

<template>
  <GridList :data="arr">
    <template #default="{ data }">
      <!--  <checkbox
        value="cb"
        :checked="data.selected"
        @tap.stop="data.selected = !data.selected"
      /> -->
      <view @tap.stop="data.selected = !data.selected">
        <RadioItem
          :id="data.id"
          class="item__radio"
          :model-value="data.selected"
        ></RadioItem>
        选中
        <view class="item">
          {{ data }}
        </view>
      </view>
    </template>
  </GridList>
  <button @click="deleteSelect">
    删除选中
  </button>
  <!-- <checkbox :checked="selectAll" @tap.stop="selectAll = !selectAll" /> -->
  <RadioItem
    :model-value="selectAll"
    label="全选"
    @tap.stop="selectAll = !selectAll"
  ></RadioItem>
</template>
