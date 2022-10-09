<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const menuList = [{ icon: "sports_soccer", label: "J1リーグ", path: "/" }];
</script>

<template>
  <QDrawer show-if-above side="left" bordered>
    <!-- drawer content -->
    <q-scroll-area class="fit">
      <QList>
        <template
          v-for="menuItem in menuList"
          :key="menuItem.label"
          @click="ro"
        >
          <QItem
            clickable
            :active="menuItem.label === 'Outbox'"
            v-ripple
            @click="router.push(menuItem.path)"
          >
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
