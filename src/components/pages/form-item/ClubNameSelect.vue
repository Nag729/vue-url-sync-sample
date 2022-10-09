<script setup lang="ts">
import { computed, ref } from "vue";
import { ALL_CLUB_NAME_LIST } from "./../../../api/club-data";

const props = defineProps({
  name: { type: String, default: null },
});

const emits = defineEmits<{
  (e: "update:name", value: string): void;
}>();

const nameOptions = ref(ALL_CLUB_NAME_LIST);
const filterName = (val: string, update: Function) => {
  update(() => {
    nameOptions.value = ALL_CLUB_NAME_LIST.filter((name) => name.includes(val));
  });
};

const innerName = computed({
  get: () => props.name,
  set: (value: string | null) => {
    emits("update:name", value ?? "");
  },
});
</script>

<template>
  <QSelect
    class="form-item"
    filled
    v-model="innerName"
    label="クラブ名"
    use-input
    hide-selected
    fill-input
    clearable
    input-debounce="0"
    :options="nameOptions"
    @filter="filterName"
  >
    <template v-slot:no-option>
      <QItem>
        <QItemSection class="text-grey"> No results </QItemSection>
      </QItem>
    </template>
  </QSelect>
</template>
