<template>
  <div >
    <SongItem v-for="(song, idx) in songs" key="idx" :song="song" />
  </div>
</template>

<script setup lang="ts">
import SongItem from "./SongItem.vue";
import type { music } from "@/stores/music";
import type { PropType } from "vue";
const { songs } = defineProps({
  songs: {
    type: Array as PropType<music[]>,
    default: () => [],
  },
});
</script>

<style scoped></style>
