<script setup lang="ts">
import { ref } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import { ClubData } from "../api/club-data";
import { FetchClubProps, fetchClubDataApi } from "../api/fake-api";
import ClubDataTable from "../components/pages/ClubDataTable.vue";
import ClubSearchForm from "../components/pages/ClubSearchForm.vue";
import { queryToNumber, queryToString } from "../helper/route-query-helper";

const router = useRouter();

const clubDataList = ref<ClubData[]>([]);
const loading = ref(false);

/**
 * API
 */
const fetchClubData = async (props?: FetchClubProps) => {
  loading.value = true;
  clubDataList.value = await fetchClubDataApi(props);
  loading.value = false;
};

onBeforeRouteUpdate(async (to, _, next) => {
  const props: FetchClubProps = {
    name: queryToString(to.query.name) ?? "",
    prefecture: queryToString(to.query.prefecture) ?? "",
    capacity: {
      min: queryToNumber(to.query.capacityMin) ?? 0,
      max: queryToNumber(to.query.capacityMax) ?? 73000,
    },
  };
  await fetchClubData(props);
  next();
});

// NOTE: fetch data when created.
await fetchClubData();

/**
 * Handle update form
 */
const updateForm = async (props: FetchClubProps) => {
  // router.push({
  //   query: {
  //     name: props.name || undefined,
  //     prefecture: props.prefecture || undefined,
  //     capacityMin: props.capacity?.min ?? undefined,
  //     capacityMax: props.capacity?.max ?? undefined,
  //   },
  // });
  await fetchClubData(props);
};
</script>

<template>
  <div>
    <div class="q-pb-lg" style="max-width: 400px">
      <ClubSearchForm @update="updateForm" />
    </div>
    <div>
      <ClubDataTable :club-data-list="clubDataList" :loading="loading" />
    </div>
  </div>
</template>
