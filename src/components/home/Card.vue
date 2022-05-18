<template>
  <div
    class="bg-slate-400 bg-opacity-20 p-3 flex flex-col rounded-md overflow-hidden whitespace-nowrap hover:opacity-90 hover:bg-slate-500 transition-all card-item"
    v-if="topic"
  >
    <img :src="topic.thumbURL" alt="" class="object-cover" />
    <span class="text-ellipsis w-full overflow-hidden font-semibold text-base mt-4">{{
      topic.title
    }}</span>
    <span class="opacity-50 font-semibold text-sm">By Duy Anh</span>
    <button
      class="absolute top-1/2 right-10 -translate-y-1/2 translate-x-1/2 opacity-0 hover:scale-105 transition-all rounded-full bg-green-600 p-4 w-16 h-16 flex items-center justify-center"
      @click="handlePlay"
    >
      <font-awesome-icon
        :icon="['fas', 'play']"
        class="text-xl text-black hover:text-slate-50 transition-all"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const { topic } = defineProps({
  topic: {
    type: Object,
    default: () => {},
  },
});
const router = useRouter();
const handlePlay = () => {
  // useRouter().push('/topic/' + topic.key);
  router.push({
    name: "topic",
    params: {
      id: topic.key,
    },
  });
};
</script>

<style scoped>
.card-item:hover button {
  /* transform: translateX(-10px); */
  opacity: 1;
}
</style>
