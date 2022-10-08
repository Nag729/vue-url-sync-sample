<script setup lang="ts">
const menuList = [{ icon: "sports_soccer", label: "J1リーグ" }];
</script>

<template>
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
</template>
