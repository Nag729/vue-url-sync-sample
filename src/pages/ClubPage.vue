<script setup lang="ts">
import { ref } from "vue";
import { ClubData } from "../api/club-data";
import { FetchClubQuery, fetchClubDataApi } from "../api/fake-api";
import ClubDataTable from "../components/pages/ClubDataTable.vue";
import ClubSearchForm from "../components/pages/ClubSearchForm.vue";

const clubDataList = ref<ClubData[]>([]);
const loading = ref(false);

const fetchClubData = async (query?: FetchClubQuery) => {
  loading.value = true;
  clubDataList.value = await fetchClubDataApi(query);
  loading.value = false;
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
      <ClubDataTable :club-data-list="clubDataList" :loading="loading" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  padding: 2rem;
}
</style>
