<script setup lang="ts">
import { useQuasar } from "quasar";
import { ref } from "vue";
import { ClubData } from "../../api/club-data";
import { fetchJ1ClubData } from "../../api/fake-api";
import ClubDataTable from "../pages/ClubDataTable.vue";

const $q = useQuasar();
const clubDataList = ref<ClubData[]>([]);

// fetch all club data
$q.loading.show();
clubDataList.value = await fetchJ1ClubData();
$q.loading.hide();
</script>

<template>
  <div class="page-container">
    <!-- <SearchForm /> -->
    <ClubDataTable :club-data-list="clubDataList" />
  </div>
</template>

<style scoped lang="scss">
.page-container {
  padding: 2rem;
}
</style>
