<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

// CREATE SEARCH FOR INPUT
// DISPLAY RESULTS IN NICE FORMAT
//IMAGE MUST DISPLAY IN SAME WIDTH AND HEIGHT

const info = ref();

const getMovie = async () => {
  try {
    const res = await axios.get(
      "https://imdb-api.com/en/API/Search/k_4j2abh8m/inception"
    );
    info.value = res.data.results;
    console.log(res.data.results);
  } catch (err) {
    console.error(err);
  }
};

onMounted(getMovie());
</script>

<template>
  <div
    class="ml-72 w-64 h-64 text-center border-4 image-container flex flex-col"
  >
    <h1>{{ info[0].title }}</h1>
    <h1>{{ info[0].description }}</h1>
    <img :src="info[0].image" />
  </div>

  <!-- <p v-for="item in info">{{ item.title }}</p>
  <img :src="item.image" v-for="item in info" /> -->
</template>
<style scoped>
div.image-container {
  position: relative;
}
div.image-container img {
  max-height: 100%;
  max-width: 100%;
  height: auto;
}
</style>
