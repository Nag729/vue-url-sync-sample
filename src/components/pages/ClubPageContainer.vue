<script setup lang="ts">
import { useQuasar } from "quasar";
import { ref } from "vue";
import { ClubData } from "../../api/club-data";
import { FetchClubQuery, fetchClubDataApi } from "../../api/fake-api";
import ClubDataTable from "./ClubDataTable.vue";
import ClubSearchForm from "./ClubSearchForm.vue";

const $q = useQuasar();
const clubDataList = ref<ClubData[]>([]);

const fetchClubData = async (query?: FetchClubQuery) => {
  $q.loading.show();
  clubDataList.value = await fetchClubDataApi(query);
  $q.loading.hide();
};

// NOTE: fetch data when created.
await fetchClubData();
</script>

<template>
  <div class="page-container">
    <div class="q-pb-lg" style="max-width: 400px">
      <ClubSearchForm @update="fetchClubData" />
    </div>
    <div>
      <ClubDataTable :club-data-list="clubDataList" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  padding: 2rem;
}
</style>
