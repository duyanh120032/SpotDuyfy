<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMediaControls } from '@vueuse/core'

const video = ref()
const { playing, currentTime, duration, volume } = useMediaControls(video, { 
  src: 'https://vredir.nixcdn.com/PreNCT20/CoHenVoiThanhXuan-MONSTAR-7051115.mp4?st=Ta7KuQSXAmgHALOZoIB0cQ&e=1652837347',
})

// Change initial media properties
onMounted(() => {
  volume.value = 0.5
  currentTime.value = 60
})
</script>

<template>
  <video ref="video" />
  <button @click="playing = !playing">Play / Pause</button>
  <span>{{ currentTime }} / {{ duration }}</span>
</template>