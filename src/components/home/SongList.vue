<template>
  <div class="grid grid-cols-2 gap-3 my-6  ">
    <SongItem v-for="(song, idx) in HomeSongs" key="song.key" :song="song" />
    <div></div>
    <button v-if="isShowMore" @click="numOfSongs = 10" class="flex justify-end font-semibold opacity-40 hover:opacity-100">See More</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import SongItem from "./SongItem.vue";
import { ref, computed } from "vue";
import { useMusicStore } from "../../stores/music";


const musicStore = useMusicStore();
const numOfSongs = ref(6);
const isShowMore = computed(() => numOfSongs.value > 3);

const HomeSongs = computed(() => {
  return musicStore.getHomeSongs?.slice(0, numOfSongs.value);
});
</script>

<style scoped></style>
