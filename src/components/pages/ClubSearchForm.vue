<script setup lang="ts">
import { ref } from "vue";
import {
  ALL_CLUB_NAME_LIST,
  ALL_CLUB_PREFECTURE_LIST,
} from "./../../api/club-data";

// Name select
const name = ref("");
const nameOptions = ref(ALL_CLUB_NAME_LIST);
const filterName = (val: string, update: Function) => {
  update(() => {
    nameOptions.value = ALL_CLUB_NAME_LIST.filter((name) => name.includes(val));
  });
};

// Prefecture select
const prefecture = ref("");
const prefectureOptions = ref(ALL_CLUB_PREFECTURE_LIST);
const filterPrefecture = (val: string, update: Function) => {
  update(() => {
    prefectureOptions.value = ALL_CLUB_PREFECTURE_LIST.filter((prefecture) =>
      prefecture.includes(val)
    );
  });
};

// Capacity Range
const capacity = ref({ min: 0, max: 73000 });

/**
 * Events
 */
const emits = defineEmits<{
  (
    e: "update",
    props: {
      name: string;
      prefecture: string;
      capacity: { min: number; max: number };
    }
  ): void;
}>();

const resetForm = () => {
  name.value = "";
  prefecture.value = "";
  capacity.value = { min: 0, max: 73000 };
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
      <QSelect
        class="form-item"
        filled
        v-model="name"
        label="クラブ名"
        use-input
        hide-selected
        fill-input
        input-debounce="0"
        :options="nameOptions"
        @update:model-value="emitUpdate"
        @filter="filterName"
      >
        <template v-slot:no-option>
          <QItem>
            <QItemSection class="text-grey"> No results </QItemSection>
          </QItem>
        </template>
      </QSelect>

      <QSelect
        class="form-item"
        filled
        v-model="prefecture"
        label="活動地域"
        use-input
        hide-selected
        fill-input
        input-debounce="0"
        :options="prefectureOptions"
        @update:model-value="emitUpdate"
        @filter="filterPrefecture"
        style="width: 240px"
      >
        <template v-slot:no-option>
          <QItem>
            <QItemSection class="text-grey"> No results </QItemSection>
          </QItem>
        </template>
      </QSelect>

      <div class="q-pt-sm">
        <QBadge>
          収容人数: {{ capacity.min }} から {{ capacity.max }} まで
        </QBadge>
        <QRange
          v-model="capacity"
          class="form-item"
          :min="0"
          :max="73000"
          @change="emitUpdate"
        />
      </div>
    </div>

    <QBtn
      class="form-item"
      flat
      rounded
      color="primary"
      icon="cancel"
      label="絞り込みをリセット"
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
