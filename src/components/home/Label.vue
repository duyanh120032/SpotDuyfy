<template>
  <div class="flex justify-between my-4">
    <span class="text-3xl font-semibold hover:underline">{{text}}</span>
    <span
      class="uppercase font-semibold hover:underline hover:opacity-100 transition-all duration-150 opacity-30"
      >SEE ALL</span
    >
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: "Top Topic",
  },
});
</script>

<style scoped></style>
