<script setup lang="ts">
import { computed, PropType } from "vue";
import CapacityRangeSelect from "./form-item/CapacityRangeSelect.vue";
import ClubNameSelect from "./form-item/ClubNameSelect.vue";
import PrefectureSelect from "./form-item/PrefectureSelect.vue";

const props = defineProps({
  name: { type: String, default: null },
  prefecture: { type: String, default: null },
  capacity: {
    type: Object as PropType<{ min: number; max: number }>,
    default: { min: 0, max: 73000 },
  },
});

const emits = defineEmits<{
  (e: "update:name", value: string): void;
  (e: "update:prefecture", value: string): void;
  (e: "update:capacity", value: { min: number; max: number }): void;
  (e: "trigger-search"): void;
  (e: "reset"): void;
}>();

const innerName = computed({
  get: () => props.name,
  set: (value: string) => {
    emits("update:name", value);
  },
});
const innerPrefecture = computed({
  get: () => props.prefecture,
  set: (value: string) => {
    emits("update:prefecture", value);
  },
});

const updateCapacity = (value: { min: number; max: number }) => {
  emits("update:capacity", value);
};

const changeCapacity = (value: { min: number; max: number }) => {
  updateCapacity(value);
  emits("trigger-search");
};

// button disabled
const sameAsDefault = computed(() => {
  return (
    !props.name &&
    !props.prefecture &&
    props.capacity.min === 0 &&
    props.capacity.max === 73000
  );
});
</script>

<template>
  <div class="outer-container">
    <div class="inner-container">
      <ClubNameSelect
        v-model:name="innerName"
        @update:name="emits('trigger-search')"
      />

      <PrefectureSelect
        v-model:prefecture="innerPrefecture"
        @update:prefecture="emits('trigger-search')"
      />

      <div class="q-pt-sm">
        <CapacityRangeSelect
          :min="capacity.min"
          :max="capacity.max"
          @update="updateCapacity"
          @change="changeCapacity"
        />
      </div>
    </div>

    <QBtn
      class="form-item"
      flat
      color="primary"
      icon="cancel"
      label="絞り込みをリセット"
      :disabled="sameAsDefault"
      @click="emits('reset')"
    />
  </div>
</template>

<style scoped lang="scss">
.outer-container {
  display: flex;
  flex-direction: column;
  gap: 8px;

  .inner-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
  }

  .form-item {
    max-width: 200px;
  }
}
</style>
