<template>
    <div class="my-20">
        <Label text="Top Playlists" />
        <div class="grid grid-cols-4 gap-4">
            <Card v-for="n in 4" key="n" />
        </div>

    </div>
</template>

<script setup lang="ts">
import Label from './Label.vue';
import Card from './Card.vue';
</script>

<style scoped>

</style>