import { createRouter, createWebHistory } from "vue-router";

// lazy load routes
const ClubPage = () => import("./pages/ClubPage.vue");

const routes = [{ path: "/", name: "clubPage", component: ClubPage }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
