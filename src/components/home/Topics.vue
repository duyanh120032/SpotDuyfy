<script setup lang="ts">
import Label from "./Label.vue";
import Card from "./Card.vue";
import { useMusicStore } from "@/stores/music";
import { storeToRefs } from "pinia";
import {getTopicDetail} from "nhaccuatui-api-full";
import {onMounted} from "vue";
interface Topic {
  backgroundColor: string;
  coverImageURL: string;
  description: string;
  key: string;
  thumbURL: string;
  title: string;
}

const { topics } = storeToRefs(useMusicStore());

// onMounted(async () => {
//   const res = await getTopicDetail("wrawbgkqq");
//   console.log(res)
// });


</script>
<template>
  <div class="my-20">
    <Label text="Top Topics" />
    <div class="grid grid-cols-4 md:grid-cols-6 gap-4 overflow-hidden" v-if="topics">
      <Card v-for="(topic, idx) in topics" :key="idx" :topic="topic" />
    </div>
  </div>
</template>

<style scoped></style>
