<template>
  <div class="rounded-lg border border-slate-700 w-auto flex flex-wrap gap-5 mt-5">
    <span
      v-for="tag in tags"
      :key="tag.name"
      class="inline-block border border-slate-50 px-4 py-1 hover:bg-gray-400 hover:bg-opacity-40 cursor-pointer transition-all rounded-2xl"
      style="border: solid 1px gray"
      >{{ tag.name }}</span
    >
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

interface Tag {
  key: string;
  name: string;
}

defineProps({
  tags: {
    type: [] as PropType<Tag[]>,
    default: () => [{} as Tag],
  },
});

</script>

<style scoped></style>
