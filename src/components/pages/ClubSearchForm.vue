<script setup lang="ts">
import { computed, ref } from "vue";
import { FetchClubProps } from "../../api/fake-api";
import ClubNameSelect from "./form-item/ClubNameSelect.vue";
import PrefectureSelect from "./form-item/PrefectureSelect.vue";
import CapacityRangeSelect from "./form-item/CapacityRangeSelect.vue";

const emits = defineEmits<{
  (e: "update", props: FetchClubProps): void;
}>();

// ref
const name = ref("");
const prefecture = ref("");
const capacity = ref({ min: 0, max: 73000 });

// button disabled
const sameAsDefault = computed(() => {
  return (
    !name.value &&
    !prefecture.value &&
    capacity.value.min === 0 &&
    capacity.value.max === 73000
  );
});

const resetForm = () => {
  name.value = "";
  prefecture.value = "";
  capacity.value = { min: 0, max: 73000 };
  emitUpdate();
};

const updateCapacityRange = (value: { min: number; max: number }) => {
  capacity.value = value;
};

const changeCapacityRange = (value: { min: number; max: number }) => {
  capacity.value = value;
  emitUpdate();
};

const emitUpdate = () => {
  emits("update", {
    name: name.value,
    prefecture: prefecture.value,
    capacity: capacity.value,
  });
};
</script>

<template>
  <div class="outer-container">
    <div class="inner-container">
      <ClubNameSelect v-model:name="name" @update:name="emitUpdate" />

      <PrefectureSelect
        v-model:prefecture="prefecture"
        @update:prefecture="emitUpdate"
      />

      <div class="q-pt-sm">
        <CapacityRangeSelect
          :min="capacity.min"
          :max="capacity.max"
          @update="updateCapacityRange"
          @change="changeCapacityRange"
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
      @click="resetForm"
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
