<template>
  <router-link :to="`/topic/${item.key}`" v-if="item">
    <div
      class="bg-slate-400 bg-opacity-20 p-3 flex flex-col rounded-md overflow-hidden whitespace-nowrap hover:opacity-90 hover:bg-slate-500 transition-all card-item group"
      v-if="item"
    >
      <img :src="item.thumbnail" alt="" class="object-cover" />
      <span class="text-ellipsis w-full overflow-hidden font-semibold text-base mt-4">{{
        item.title
      }}</span>
      <button
        class="absolute top-1/2 right-10 -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 hover:scale-105 transition-all rounded-full bg-green-600 p-4 w-16 h-16 flex items-center justify-center"
        @click="handlePlay"
      >
        <font-awesome-icon
          :icon="['fas', 'play']"
          class="text-xl text-black hover:text-slate-50 transition-all"
        />
      </button>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
// const topic = {
//   coverImageURL: "",
//   thumbURL: "https://avatar-ex-swe.nixcdn.com/playlist/2020/10/13/2/1/d/c/1602581337628_300.jpg",
//   description: "",
//   key: "",
//   playlist: [],
//   title: "Nhac viet thang 20",
// };

const handlePlay = () => {};
</script>

<style scoped></style>
