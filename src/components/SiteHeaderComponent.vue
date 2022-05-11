<template>
  <header>
    <SiteLogo />
    <SelectComponent
      @changeFilm="filterFilmGenre"
      @changeSerie="filterSerieGenre"
      :filmGenre="filmGenre"
      :serieGenre="serieGenre"
    />
    <SearchInput v-model="search" @keyUp="getApiLink" @keyEnter="getApi" />
  </header>
</template>

<script>
import axios from "axios";
import SiteLogo from "@/components/SiteLogoComponent.vue";
import SelectComponent from "@/components/SelectFilterComponent.vue";

import SearchInput from "@/components/SearchInputComponent.vue";

import state from "@/state.js";

export default {
  name: "SiteHeader",
  components: {
    SiteLogo,
    SearchInput,
    SelectComponent,
  },
  data() {
    return {
      search: "",
      link: "",
      serieLink: "",
    };
  },
  computed: {
    filmGenre() {
      //console.log(state.filmGenre);
      return state.filmGenre;
    },
    serieGenre() {
      return state.serieGenre;
    },
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
    getFilmGenre() {
      axios
        .get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=3672eed0b59fb1e933fa0e484da2be73&language=en-US"
        )
        .then((response) => {
          //console.log(response.data.genres);
          state.filmGenre = response.data.genres;
          console.log(state.filmGenre);
        });
    },
    getSerieGenre() {
      axios
        .get(
          "https://api.themoviedb.org/3/genre/tv/list?api_key=3672eed0b59fb1e933fa0e484da2be73&language=en-US"
        )
        .then((response) => {
          //console.log(response.data.genres);
          state.serieGenre = response.data.genres;
          console.log(state.serieGenre);
        });
    },
    filterFilmGenre(value) {
      //console.log(value.target.value);
      state.filmFilter = value.target.value;
    },
    filterSerieGenre(value) {
      //console.log(value.target.value);
      state.serieFilter = value.target.value;
    },
  },
  mounted() {
    this.getFilmGenre();
    this.getSerieGenre();
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
