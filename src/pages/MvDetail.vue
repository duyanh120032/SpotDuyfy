<template>
  <div class="mb-60">
    <VideoPlayer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { getVideoDetail } from "nhaccuatui-api-full";
import VideoPlayer from "../components/MvDetail.vue/VideoPlayer.vue";

onMounted(async () => {
  const res = await getVideoDetail("IXTbg1bBelQKh");
  console.log(res);
});
</script>

<style scoped></style>
