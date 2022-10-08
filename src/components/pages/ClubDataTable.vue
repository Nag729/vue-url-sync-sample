<script setup lang="ts">
import { PropType } from "vue";
import { ClubData } from "../../api/club-data";

const props = defineProps({
  clubDataList: { type: Array as PropType<ClubData[]>, required: true },
});

type TableColumn = {
  name: string;
  label: string;
  field: string;
  align: "left" | "center" | "right";
  sortable: boolean;
};
const columns: TableColumn[] = [
  {
    name: "name",
    label: "チーム名",
    field: "name",
    align: "left",
    sortable: true,
  },
  {
    name: "prefecture",
    label: "活動地域",
    field: "prefecture",
    align: "left",
    sortable: true,
  },
  {
    name: "stadium",
    label: "ホームスタジアム",
    field: "stadium",
    align: "left",
    sortable: true,
  },
  {
    name: "capacity",
    label: "収容人数",
    field: "capacity",
    align: "right",
    sortable: true,
  },
];
</script>

<template>
  <QTable
    title="J1クラブ"
    :rows="props.clubDataList"
    :columns="columns"
    row-key="name"
  >
    <template v-slot:body="props">
      <QTr :props="props">
        <QTd key="name" :props="props">
          <div class="club-name-container">
            <QImg
              :src="props.row.emblemUrl"
              style="height: 32px; max-width: 32px"
            />
            {{ props.row.name }}
          </div>
        </QTd>
        <QTd key="prefecture" :props="props">
          {{ props.row.prefecture }}
        </QTd>
        <QTd key="stadium" :props="props">
          {{ props.row.stadium }}
        </QTd>
        <QTd key="capacity" :props="props">
          {{ props.row.capacity }}
        </QTd>
      </QTr>
    </template>
  </QTable>
</template>

<style scoped lang="scss">
.club-name-container {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
