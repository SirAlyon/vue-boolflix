<template>
  <header>
    <input type="text" v-model="search" @keyup="getApiLink" />
    <button @click="getApi">Submit</button>
  </header>
</template>

<script>
import axios from "axios";

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
          console.log(response.data.results);
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
    header{
        background-color: black;
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        button{
            margin-left: 2rem;
        }
    }
</style>
