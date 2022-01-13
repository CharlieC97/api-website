<script setup>
import axios from "axios";

// axios
//   .get("https://imdb-api.com/en/API/Search/k_4j2abh8m/inception")
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });

const getMovie = async () => {
  try {
    const response = await axios.get(
      "https://imdb-api.com/en/API/Search/k_4j2abh8m/inception"
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
getMovie();
</script>

<template>
  <h1>This is the IMDB Page</h1>
  <p>{{ response }}</p>
</template>
