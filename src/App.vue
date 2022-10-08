<template>
  <QLayout view="hHh lpR fFf">
    <QHeader elevated class="bg-primary text-white">
      <QToolbar>
        <QToolbarTitle>
          Vue.js で検索条件と URL を同期させるサンプル App
        </QToolbarTitle>
      </QToolbar>
    </QHeader>

    <QDrawer show-if-above side="left" bordered>
      <!-- drawer content -->
      <q-scroll-area class="fit">
        <QList>
          <template v-for="menuItem in menuList" :key="menuItem.label">
            <QItem clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <QItemSection avatar>
                <QIcon :name="menuItem.icon" />
              </QItemSection>
              <QItemSection>
                {{ menuItem.label }}
              </QItemSection>
            </QItem>
          </template>
        </QList>
      </q-scroll-area>
    </QDrawer>

    <QPageContainer>
      <router-view />
    </QPageContainer>

    <QFooter elevated class="bg-grey-8 text-white">
      <QToolbar>
        <QToolbarTitle>
          <div>Title</div>
        </QToolbarTitle>
      </QToolbar>
    </QFooter>
  </QLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menuList = [{ icon: "coffee", label: "ビバレッジ" }];

// const leftDrawerOpen = ref(false);
// const toggleLeftDrawer = () => {
//   leftDrawerOpen.value = !leftDrawerOpen.value;
// };
</script>
