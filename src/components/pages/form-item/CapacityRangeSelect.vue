<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  min: { type: Number, required: true },
  max: { type: Number, required: true },
});

const emits = defineEmits<{
  (e: "update", value: { min: number; max: number }): void;
  (e: "change", value: { min: number; max: number }): void;
}>();

const innerCapacity = computed({
  get: () => {
    return { min: props.min, max: props.max };
  },
  set: (value: { min: number; max: number }) => {
    emits("update", value);
  },
});
</script>

<template>
  <div>
    <QBadge>
      ホームスタジアム収容人数: {{ props.min }} から {{ props.max }} まで
    </QBadge>
    <QRange
      v-model="innerCapacity"
      :min="0"
      :max="73000"
      :step="1000"
      @change="emits('change', $event)"
      style="width: 280px"
    />
  </div>
</template>
