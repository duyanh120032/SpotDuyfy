<template>
    <div>
        Topic
     {{id}}
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
// get params
const {id} = useRoute().params;
</script>

<style scoped>

</style>