<template>
  <div>
    <div class="px-3 py-2 w-80 h-auto rounded-3xl bg-white flex items-center relative">
      <label for="search" class="flex items-center">
        ><font-awesome-icon :icon="['fas', 'magnifying-glass']" class="text-2xl text-black px-2"
      /></label>
      <form action="" @submit.prevent="handleSearch">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Artists, songs, or podcasts"
          class="w-full bg-white rounded border-none border-gray-300 focus:border-none text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          v-model="searchKey"
          @mouseover="showSearchResult = true"
          @mouseout="showSearchResult = false"
        />
      </form>
      <transition class="absolute top-9 z-10">
        <div v-if="showSearchResult" class="mt-3">
          <TopKeyword />
        </div>
      </transition>
    </div>

    <!-- songs -->
    <div v-if="songs.length > 0">
      <Label text="Songs" />
      <SongList :songs="songs" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { searchByKeyword, getTopKeyword } from "nhaccuatui-api-full";
import { ref, watch, onMounted, reactive, toRefs } from "vue";
import TopKeyword from "../components/search/TopKeyword.vue";
import Label from "../components/home/Label.vue";
import SongList from "../components/search/SongList.vue";
const searchKey = ref("");
const topKeyword = ref("");
const showSearchResult = ref(false);
const result = reactive({
  songs: [],
  artists: [],
  albums: [],
  podcasts: [],
});
const { songs, artists, albums, podcasts } = toRefs(result);


onMounted(async () => {
  const res = await getTopKeyword();
  topKeyword.value = res.listKeyValue;
});
const handleSearch = async () => {
  if (searchKey.value) {
    const res = await searchByKeyword(searchKey.value);
    result.songs = res.search?.song.song;
  }
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
