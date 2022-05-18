<template>
  <div class=" " >
    <Label text="Recommend" />
    <div >
      <Playlist :playlist="recommend.playlist" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Label from "../home/Label.vue";
import type { PropType } from "vue";
import Playlist from "../topic/Playlist.vue";

defineProps({
  recommend: {
    type: Object as PropType<any>,
    default: () => ({}),
  },
});
</script>

<style scoped></style>
