<template>
  <div
    class="p-3 bg-slate-700 bg-opacity-40 mb-3 rounded-md flex justify-between hover:bg-slate-200 hover:bg-opacity-25 song-item"
    @click="logSong"
  >
    <div class="flex gap-3">
      <div class="reactive w-16 h-16">
        <img
          :src="`${song.thumbnail ? song.thumbnail : 'https://avatar-ex-swe.nixcdn.com/song/None'}`"
          alt=""
          class="absolute w-full rounded"
        />
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-slate-800 bg-opacity-50 opacity-0 hover:opacity-100 transition-all"
        >
          <font-awesome-icon :icon="['fas', 'play']" class="text-xl text-black" />
        </div>
      </div>
      <div>
        <h6 class="font-semibold">{{ song.title }}</h6>
        <small
          class="text-white opacity-40 font-bold px-2"
          v-for="artist in song.artists"
          :key="artist.name"
          >{{ artist.name }}</small
        >
      </div>
    </div>
    <div class="flex justify-center items-center gap-4">
      <span class="font-semibold opacity-50">{{ song.duration }}</span>
      <div class="flex justify-center items-center opacity-0 transition-all play-btn">
        <button
          class="p3 w-12 h-12 bg-green-600 rounded-full flex justify-center items-center hover:bg-green-500 transition-all"
          @click="handlePlay"
        >
          <font-awesome-icon :icon="['fas', 'play']" class="text-xl text-black" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMusicStore } from "../../stores/music";

const { song } = defineProps({
  song: {
    type: Object,
    default: () => {},
  },
});
const { setPlayMusic } = useMusicStore();

const handlePlay = () => {
  console.log(song);
  setPlayMusic(song.key);
};
const logSong = () => {
  console.log(song);
};
</script>

<style scoped>
.song-item:hover .play-btn {
  opacity: 1;
}
</style>
