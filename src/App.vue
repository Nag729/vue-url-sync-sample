<script setup lang="ts">
import ClubPageContainer from "./components/pages/ClubPageContainer.vue";
import Drawer from "./components/layout/Drawer.vue";
import Footer from "./components/layout/Footer.vue";
import Header from "./components/layout/Header.vue";
</script>

<template>
  <QLayout view="hHh lpR fFf">
    <Header />
    <Drawer />

    <QPageContainer>
      <Suspense>
        <template #default>
          <ClubPageContainer />
        </template>
      </Suspense>
    </QPageContainer>

    <Footer />
  </QLayout>
</template>
