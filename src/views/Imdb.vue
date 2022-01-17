<script setup>
import axios from "axios";
import { onMounted, ref, onBeforeMount } from "vue";

let info = ref([]);

// const getMovie = () =>
//   axios
//     .get("https://imdb-api.com/en/API/Search/k_4j2abh8m/inception")
//     .then(function (response) {
//       // handle success
//       const info = response.data;
//       console.log(response);
//       console.log("AXIOS RUN");
//       return info;
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     });

const getMovie = async () => {
  try {
    const res = await axios.get(
      "https://imdb-api.com/en/API/Search/k_4j2abh8m/inception"
    );

    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

// onBeforeMount(async () => {
//   await axios
//     .get("https://imdb-api.com/en/API/Search/k_4j2abh8m/inception")
//     .then((response) => {
//       // handle success
//       info = response.data;
//       console.log(response);
//       console.log(info);
//     })
//     .catch((error) => {
//       // handle error
//       console.warn(error);
//     });
// });

onMounted(getMovie());
</script>

<template>
  <h1>This is the IMDB Page</h1>
  <p>{{ info }}</p>
</template>
