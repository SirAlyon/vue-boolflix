<template>
  <header>
    <SiteLogo />
    <SearchInput 
    v-model="search"
    @keyUp="getApiLink"
    @keyEnter="getApi"
    />
  </header>
</template>

<script>
import axios from "axios";
import SiteLogo from "@/components/SiteLogoComponent.vue";
import SearchInput from "@/components/SearchInputComponent.vue";

import state from "@/state.js";

export default {
  name: "SiteHeader",
  components:{
    SiteLogo,
    SearchInput,
  },
  data() {
    return {
      search: "",
      link: "",
      serieLink: "",
    };
  },
  methods: {
    getApi() {
      axios
        .get(this.link)
        .then((response) => {
          state.loading = false;
          state.films = response.data.results;
          console.log(state.films, state.loading);
        })
        .catch((error) => {
          console.log(error);
        });
      axios
        .get(this.serieLink)
        .then((response) => {
          state.loading = false;
          state.series = response.data.results;
          console.log(state.series, state.loading);

          // per ogni serie in series
          // prendi il cast via axios
          // aggiungi la risposta in serie.cast
          
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(state.series);
    },
    getFilmLink() {
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
    getSerieLink() {
      if (this.search !== "") {
        return (this.serieLink =
          "https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=en_EN&query=" +
          this.search);
      } else {
        return (this.serieLink =
          "https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT");
      }
    },
    getApiLink() {
      if (this.search !== "") {
        this.getFilmLink();
        this.getSerieLink();
      }
    },
  },
};
</script>

<style scoped lang="scss">
header {
  background-color: black;
  padding: 0 5rem;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  button {
    margin-left: 2rem;
  }
}
</style>
