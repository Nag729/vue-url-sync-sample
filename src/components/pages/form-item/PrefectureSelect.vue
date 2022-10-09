<script setup lang="ts">
import { computed, ref } from "vue";
import { ALL_CLUB_PREFECTURE_LIST } from "./../../../api/club-data";

const props = defineProps({
  prefecture: { type: String, default: null },
});

const emits = defineEmits<{
  (e: "update:prefecture", value: string): void;
}>();

const prefectureOptions = ref(ALL_CLUB_PREFECTURE_LIST);
const filterPrefecture = (val: string, update: Function) => {
  update(() => {
    prefectureOptions.value = ALL_CLUB_PREFECTURE_LIST.filter((prefecture) =>
      prefecture.includes(val)
    );
  });
};

const innerPrefecture = computed({
  get: () => props.prefecture,
  set: (value: string | null) => {
    emits("update:prefecture", value ?? "");
  },
});
</script>

<template>
  <QSelect
    class="form-item"
    filled
    v-model="innerPrefecture"
    label="活動地域"
    use-input
    hide-selected
    fill-input
    clearable
    input-debounce="0"
    :options="prefectureOptions"
    @filter="filterPrefecture"
  >
    <template v-slot:no-option>
      <QItem>
        <QItemSection class="text-grey"> No results </QItemSection>
      </QItem>
    </template>
  </QSelect>
</template>
