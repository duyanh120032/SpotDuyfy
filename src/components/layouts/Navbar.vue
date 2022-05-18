<template>
  <header class="body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center mb-4 md:mb-0">
        <font-awesome-icon :icon="['fab', 'spotify']" class="text-3xl" />
        <span class="ml-3 text-xl">Spotify</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <router-link to="/" class="mr-5 hover:text-gray-900 items-end flex gap-3">
          <font-awesome-icon :icon="['fas', 'house']" class="text-3xl" />
          Home
        </router-link>
        <router-link to="/search" class="mr-5 hover:text-gray-900 items-end flex gap-3">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="text-3xl" />
          Search
        </router-link>
        <a class="mr-5 hover:text-gray-900 items-center flex gap-3">
          <font-awesome-icon :icon="['fas', 'book-open']" class="text-3xl" />
          Your library</a
        >
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.router-link-active {
  color: rgb(100, 255, 61);
}
</style>
