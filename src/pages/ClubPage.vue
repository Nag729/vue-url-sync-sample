<script setup lang="ts">
import { ref } from "vue";
import {
  LocationQuery,
  onBeforeRouteUpdate,
  useRoute,
  useRouter,
} from "vue-router";
import { ClubData } from "../api/club-data";
import { fetchClubDataApi } from "../api/fake-api";
import ClubDataTable from "../components/pages/ClubDataTable.vue";
import ClubSearchForm from "../components/pages/ClubSearchForm.vue";
import { queryToNumber, queryToString } from "../helper/route-query-helper";

const router = useRouter();
const route = useRoute();

/**
 * ref
 */
const name = ref("");
const prefecture = ref("");
const capacity = ref({ min: 0, max: 73000 });
const clubDataList = ref<ClubData[]>([]);
const loading = ref(false);

/**
 * Sync URL Query Params & Ref Data
 */
const updateDataFromUrlQuery = (query: LocationQuery): void => {
  name.value = queryToString(query.name) ?? "";
  prefecture.value = queryToString(query.prefecture) ?? "";
  capacity.value = {
    min: queryToNumber(query.capacityMin) ?? 0,
    max: queryToNumber(query.capacityMax) ?? 73000,
  };
};

const updateUrlQueryFromData = (): void => {
  router.push({
    query: {
      name: name.value || undefined,
      prefecture: prefecture.value || undefined,
      capacityMin: capacity.value?.min ?? undefined,
      capacityMax: capacity.value?.max ?? undefined,
    },
  });
};

/**
 * API
 */
const fetchClubData = async () => {
  loading.value = true;
  clubDataList.value = await fetchClubDataApi({
    name: name.value,
    prefecture: prefecture.value,
    capacity: capacity.value,
  });
  loading.value = false;
};

/**
 * Lifecycle Hooks
 */
// NOTE: onCreated: fetch data with URL query.
updateDataFromUrlQuery(route.query);
await fetchClubData();

// NOTE: onBeforeRouteUpdate: fetch data with URL query, here again.
onBeforeRouteUpdate(async (to, _, next) => {
  updateDataFromUrlQuery(to.query);
  next();
  await fetchClubData();
});

const resetForm = () => {
  name.value = "";
  prefecture.value = "";
  capacity.value = { min: 0, max: 73000 };
  updateUrlQueryFromData();
};
</script>

<template>
  <div>
    <div class="q-pb-lg" style="max-width: 400px">
      <ClubSearchForm
        v-model:name="name"
        v-model:prefecture="prefecture"
        v-model:capacity="capacity"
        @trigger-search="updateUrlQueryFromData"
        @reset="resetForm"
      />
    </div>
    <div>
      <ClubDataTable :club-data-list="clubDataList" :loading="loading" />
    </div>
  </div>
</template>
