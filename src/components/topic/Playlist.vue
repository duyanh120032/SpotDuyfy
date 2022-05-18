<template>
  <div class="grid grid-cols-4 md:grid-cols-6 gap-3">
    <PlaylistItem v-for="item in playlist" :key="item.key" :item="item"/>
  </div>
</template>

<script setup lang="ts">
import PlaylistItem from "./PlaylistItem.vue";
import type { PropType } from "vue";
interface Playlist {
  coverImageURL: string;
  description: string;
  key: string;
  title: string;
}
defineProps({
  playlist: {
    type: Array as PropType<Playlist[]>,
    default: () => [],
  },
});
</script>

<style scoped></style>
