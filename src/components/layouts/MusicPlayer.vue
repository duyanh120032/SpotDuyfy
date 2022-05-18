<template>
  <div
    class="fixed bottom-0 h-28 bg-slate-900 w-full flex justify-center items-center container mx-auto"
    v-if="getCurrentMusic.artists"
  >
    <div class="grid grid-cols-2">
      <div class="flex justify-start">
        <img :src="getCurrentMusic.thumbnail" alt="" class="object-cover w-12 h-12" />
        <div class="flex flex-col px-2">
          <h6 class="font-semibold">{{ getCurrentMusic.title }}</h6>
          <small class="opacity-40">{{ getCurrentMusic.artists[0]?.name }}</small>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-3 justify-center items-center">
      <audio
        controls
        autoplay
        :src="getCurrentMusic.streamUrls[0].streamUrl"
        v-if="getCurrentMusic.streamUrls"
        class="hidden"
        ref="playerRef"
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <div class="flex gap-4">
        <button
          class="bg-green-600 p-2 rounded-full w-12 h-12 flex justify-center items-center"
          v-if="getCurrentMusic.streamUrls"
        >
          <font-awesome-icon :icon="['fas', 'backward-step']" class="text-xl text-white" />
        </button>
        <div>
          <button
            @click="handlePlay"
            v-if="!isPlaying"
            class="p3 w-12 h-12 bg-green-600 rounded-full flex justify-center items-center"
          >
            <font-awesome-icon :icon="['fas', 'play']" class="text-xl text-black" />
          </button>
          <button
            @click="handlePause"
            v-if="isPlaying"
            class="p3 w-12 h-12 bg-green-600 rounded-full flex justify-center items-center"
          >
            <font-awesome-icon :icon="['fas', 'pause']" class="text-xl text-black" />
          </button>
        </div>
        <button
          class="bg-green-600 p-2 rounded-full w-12 h-12 flex justify-center items-center"
          v-if="getCurrentMusic.streamUrls"
        >
          <font-awesome-icon :icon="['fas', 'forward-step']" class="text-xl text-white" />
        </button>
      </div>
      <span>{{ timeLine }}/{{duration}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getSong } from "nhaccuatui-api-full";
import { ref, onMounted, computed, watchEffect } from "vue";
import { useMusicStore } from "@/stores/music";
import { storeToRefs } from "pinia";

// import type {music} from '../../stores/music'
const { getCurrentMusic } = storeToRefs(useMusicStore());
const playerRef = ref<any>(null);
const isPlaying = ref(true);
const timeLine = ref(0);
const duration = ref(0);

watchEffect(() => {
  if (playerRef.value) {
    playerRef.value.addEventListener("timeupdate", () => {
      timeLine.value = playerRef.value.currentTime;
      console.log(timeLine.value);
    });
    duration.value = playerRef.value.duration;
  }
});
const handlePlay = () => {
  playerRef.value.play();
  isPlaying.value = true;
};
const handlePause = () => {
  playerRef.value.pause();
  isPlaying.value = false;
};
</script>

<style>
/* style audio tag */
</style>
