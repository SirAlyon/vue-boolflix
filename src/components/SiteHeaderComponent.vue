<template>
  <header>
    <input type="text" v-model="search" @keyup="getApiLink" />
    <button @click="getApi">Submit</button>
    <!-- <div class="film" v-if="!loading">
      <div class="film" v-for="(film, index) in films" :key="index">
        <div class="title">{{ film.title }}</div>
        <div class="original_title">{{ film.original_title }}</div>
        <div class="lang">{{ film.original_language }}</div>
        <div class="review">{{ film.vote_average }}</div>
      </div>
    </div> -->
  </header>
</template>

<script>
import axios from "axios";
import state from "@/state.js";

export default {
  name: "SiteHeader",
  data() {
    return {
      search: "",
      link: "",
    };
  },
  methods: {
    getApi() {
      axios
        .get(this.link)
        .then((response) => {
          state.loading = false
          state.films = response.data.results
          console.log(state.films, state.loading);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getApiLink() {
      if (this.search !== "") {
        return (this.link =
          "https://api.themoviedb.org/3/search/movie?api_key=3672eed0b59fb1e933fa0e484da2be73&language=en-US" +
          "&query=" +
          this.search +
          "&page=1&include_adult=false");
      } else {
        return (this.link =
          "https://api.themoviedb.org/3/search/movie?api_key=3672eed0b59fb1e933fa0e484da2be73&language=en-US&page=1&include_adult=false");
      }
    },
  },
};
</script>

<style scoped lang="scss">
header {
  background-color: black;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  button {
    margin-left: 2rem;
  }
}
</style>
