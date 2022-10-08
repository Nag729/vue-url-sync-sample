<script setup lang="ts">
import ClubPage from "./components/pages/ClubPage.vue";
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
        <ClubPage />
      </Suspense>
    </QPageContainer>

    <Footer />
  </QLayout>
</template>
