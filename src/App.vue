<script setup lang="ts">
import Drawer from "./components/layout/Drawer.vue";
import FallbackLoading from "./components/layout/FallbackLoading.vue";
import Footer from "./components/layout/Footer.vue";
import Header from "./components/layout/Header.vue";
</script>

<template>
  <QLayout view="hHh lpR fFf">
    <Header />
    <Drawer />

    <QPageContainer>
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Suspense>
            <div class="page-wrapper">
              <component :is="Component" />
            </div>
            <template #fallback>
              <FallbackLoading />
            </template>
          </Suspense>
        </template>
      </RouterView>
    </QPageContainer>

    <Footer />
  </QLayout>
</template>

<style lang="scss">
.page-wrapper {
  padding: 2rem;
}
</style>
