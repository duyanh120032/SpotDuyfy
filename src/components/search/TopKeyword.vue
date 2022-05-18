<template>
  <table class="table-fixed p-5 bg-gray-500 rounded-md">
    <thead >
      <th class="px-2 bg-gray-400  border-b-2 border-gray-500 text-2xl font-semibold">Top Keyword</th>
    </thead>
    <tbody>
      <tr class="flex gap-4 my-3 mx-2" v-for="(n, idx) in 5" :key="n">
        <td>{{ idx + 1 }}</td>
        <td>Ngủ đi ta hỡi</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts"></script>

<style scoped></style>
