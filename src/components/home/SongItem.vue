<template>
  <div
    class="w-full flex h-14 justify-start bg-slate-400 bg-opacity-20 rounded-md hover:bg-slate-600 transition-all relative song-item"
  >
    <img class="object-cover" alt="" :src="song.thumbnail" />
    <span class="text-center leading-7 p-3 font-semibold overflow-hidden truncate">{{
      song.title
    }}</span>
    <button
      class="absolute top-1/2 right-10 -translate-y-1/2 translate-x-1/2 opacity-0 hover:scale-105 transition-all rounded-full bg-green-600 p-4 w-10 h-10 flex items-center justify-center"
      @click="handlePlayMusic"
    >
      <font-awesome-icon :icon="['fas', 'play']" class="text-xl text-black" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useMusicStore } from "@/stores/music";
import type { PropType } from "@vue/runtime-dom";
import { getSong } from "nhaccuatui-api-full";
export interface music {
  title: string;
  duration: string;
  isMyPlaylist: boolean;
  key: string;
  streamUrls?: string[];
  thumbnail: string;
  type: string;
}

const { setPlayMusic } = useMusicStore();
const props = defineProps({
  song: {
    type: Object as PropType<music>,
    required: true,
  },
});
const { song } = props;

const handlePlayMusic = async () => {
  // const res = await getSong(song.key);
  // console.log(res.song);
  setPlayMusic(song.key);
};
</script>

<style scoped>
.song-item:hover button {
  opacity: 1;
}
</style>
