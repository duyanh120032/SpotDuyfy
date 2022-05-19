<template>
  <div class="flex space-x-3">
    <div class="flex gap-8 flex-col w-1/3">
      <img :src="playlist.thumbnail" alt="" class="w-96 h-96 object-cover" />
      <!-- <div class="">
        <ListTag :tags="playlist.listTag" v-if="playlist.listTag" />
      </div> -->
    </div>
    <div class="w-2/3">
      <div class="flex justify-between">
        <h1 class="font-bold text-3xl my-8">{{ playlist.title }}</h1>
        <button
          class="font-bold text-2xl my-8 text-green-500 border rounded-lg px-2 hover:bg-slate-50 transition-all"
          @click="playAll"
        >
          Play All
        </button>
      </div>
      <div class="my-8">
        <SongList :songs="playlist.songs" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ListTag from "../components/playlist/ListTag.vue";
import { useRoute } from "vue-router";
import { onMounted, reactive, toRefs } from "vue";
import { getPlaylistDetail } from "nhaccuatui-api-full";
import SongList from "../components/search/SongList.vue";
import { useMusicStore } from "../stores/music";

// import type { music } from "@/stores/music";
const { id } = useRoute().params;
const { setPlaylist } = useMusicStore();
interface Tag {
  key: string;
  name: string;
}
interface Playlist {
  thumbnail: string;
  title: string;
  key: string;
  //   playlist: [];
  songs: [];
  listTag: [Tag];
}

const playlist = reactive({} as Playlist);
// const { thumbnail, title, key, songs, listTag } = toRefs(playlist);

onMounted(async () => {
  const res = await getPlaylistDetail(id as string);
  playlist.thumbnail = res.playlist.thumbnail;
  playlist.title = res.playlist.title;
  playlist.key = res.playlist.key;
  //   playlist.playlist = res.playlist.playlist;
  playlist.songs = res.playlist.songs;
  playlist.listTag = res.playlist.listTag;
});
const playAll = () => {
  if (playlist.songs.length > 0) {
    setPlaylist(playlist.songs);
  }
};
</script>

<style scoped></style>
