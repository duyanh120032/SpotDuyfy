<template>
  <div>
    <img :src="coverImageURL" alt="" class="rounded mx-auto" />
    <h1 class="font-bold text-3xl my-8">{{ title }}</h1>
    <p class="text-sm opacity-60">{{ description }}</p>
    <div class="my-8">
      <Playlist :playlist="playlist"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { reactive, onMounted, toRefs } from "vue";
import { getTopicDetail } from "nhaccuatui-api-full";
import Playlist from "../components/topic/Playlist.vue";
const topic = reactive({
  coverImageURL: "",
  description: "",
  key: "",
  playlist: [],
  title: "",
});
const { coverImageURL, description, key, playlist, title } = toRefs(topic);
// get params
const { id } = useRoute().params;
onMounted(async () => {
  const res = await getTopicDetail(id as string);
  console.log(res);
  topic.coverImageURL = res.topic.coverImageURL;
  topic.description = res.topic.description;
  topic.key = res.topic.key;
  topic.playlist = res.topic.playlist;
  topic.title = res.topic.title;
});
</script>

<style scoped></style>
