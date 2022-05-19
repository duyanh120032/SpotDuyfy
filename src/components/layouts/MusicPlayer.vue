<template>
  <div
    class="fixed bottom-0 h-28 px-3 bg-gray-900 w-full flex justify-between items-center container mx-auto shadow-lg"
    v-if="getCurrentMusic.artists"
  >
    <div class="w-1/3">
      <div class="flex justify-start">
        <img :src="getCurrentMusic.thumbnail" alt="" class="object-cover w-12 h-12" />
        <div class="flex flex-col px-2">
          <h6 class="font-semibold">{{ getCurrentMusic.title }}</h6>
          <small class="opacity-40">{{ getCurrentMusic.artists[0]?.name }}</small>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-3 justify-center items-center w-full">
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
      <div class="flex gap-4 items-center">
        <button
          class="bg-green-600 p-2 rounded-full w-10 h-10 flex justify-center items-center hover:bg-green-700 transition-all"
          v-if="getCurrentMusic.streamUrls"
          @click="handlePrev"
        >
          <font-awesome-icon :icon="['fas', 'backward-step']" class="text-xl text-white" />
        </button>
        <div>
          <button
            @click="handlePlay"
            v-if="!isPlaying"
            class="p3 w-12 h-12 bg-green-600 rounded-full flex justify-center items-center hover:bg-green-500 transition-all"
          >
            <font-awesome-icon :icon="['fas', 'play']" class="text-xl text-black" />
          </button>
          <button
            @click="handlePause"
            v-if="isPlaying"
            class="p3 w-12 h-12 bg-green-600 rounded-full flex justify-center items-center hover:bg-green-500 transition-all"
          >
            <font-awesome-icon :icon="['fas', 'pause']" class="text-xl text-black" />
          </button>
        </div>
        <button
          class="bg-green-600 p-2 rounded-full w-10 h-10 flex justify-center items-center hover:bg-green-700 transition-all"
          v-if="getCurrentMusic.streamUrls"
          @click="handleNext"
        >
          <font-awesome-icon :icon="['fas', 'forward-step']" class="text-xl text-white" />
        </button>
      </div>
      <div class="flex gap-4">
        <span class="font-semibold text-gray-300">{{ timeLine }}</span>
        <input
          type="range"
          :max="duration"
          step="0.001"
          :value="playerRef?.currentTime"
          @change="onChangeTimeline"
          class="h-auto outline-none"
        />
        <span class="font-semibold text-gray-300"> {{ `${formatTime(duration)}` }}</span>
      </div>
    </div>
    <input
      type="range"
      :value="playerRef?.volume"
      min="0"
      max="1"
      @change="onChangeVolume"
      step="0.01"
    />
  </div>
</template>

<script setup lang="ts">
import { getSong } from "nhaccuatui-api-full";
import { ref, onMounted, computed, watchEffect } from "vue";
import { useMusicStore } from "@/stores/music";
import { storeToRefs } from "pinia";

// import type {music} from '../../stores/music'
const { getCurrentMusic } = storeToRefs(useMusicStore());
const { nextMusic, prevMusic } = useMusicStore();
const playerRef = ref<any>(null);
const isPlaying = ref(true);
const timeLine = ref<number | string>(0);
const duration = ref<number>(0);
const volume = ref<number>(0.5);

// input = 100 secs outout = 1:40
const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

watchEffect(() => {
  if (playerRef.value) {
    playerRef.value.addEventListener("timeupdate", () => {
      timeLine.value = formatTime(parseInt(playerRef.value.currentTime));
      // console.log(timeLine.value, parseInt(playerRef.value.duration));
      duration.value = parseInt(playerRef.value.duration);
    });
    duration.value = parseInt(playerRef.value.duration);
    volume.value = playerRef.value.volume;
  }
});
watchEffect(() => {
  // if (getCurrentMusic.value) {
  //   if (!getCurrentMusic.value.streamUrls) {
  //     nextMusic();
  //   } else {
  //     // playerRef.value.src = "";
  //   }
  // } else {
  //   playerRef.value.src = "";
  // }
  if (getCurrentMusic.value) {
    console.log(getCurrentMusic.value);
  } else {
    console.log("null");
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

const onChangeVolume = (e: any) => {
  playerRef.value.volume = e.target.value;
};
const onChangeTimeline = (e: any) => {
  playerRef.value.currentTime = e.target.value;
};
const handlePrev = () => {
  prevMusic();
};
const handleNext = () => {
  nextMusic();
};
</script>

<style>
::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #04aa6d;
  cursor: pointer;
}
/* style audio tag */
</style>
