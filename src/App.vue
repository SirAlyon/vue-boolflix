<template>
  <div id="app">
    <SiteHeader />
    <!-- <SiteMain /> -->
    <div class="container">
      <div class="row">
        <h2>Films List:</h2>
        <Films
          class="films"
          :film="film"
          :loading="loading"
          :image="getImage(film.poster_path)"
          :language="flags(film.original_language)"
          :vote="getVote(film.vote_average)"
          v-for="(film, index) in films"
          :key="'film' + index"
        />
        <h2>Series List:</h2>
        <Series
          class="series"
          :serie="serie"
          :loading="loading"
          :image="getImage(serie.poster_path)"
          :language="flags(serie.original_language)"
          :vote="getVote(serie.vote_average)"
          v-for="(serie, index) in series"
          :key="'serie' + index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeaderComponent.vue";
import Films from "@/components/FilmsComponent.vue";
import Series from "@/components/SeriesComponent.vue";

import state from "@/state.js";

//import SiteMain from '@/components/SiteMainComponent.vue'

export default {
  name: "App",
  components: {
    SiteHeader,
    Films,
    Series,
    //SiteMain
  },
  computed: {
    films() {
      return state.films;
    },
    loading() {
      return state.loading;
    },
    series() {
      return state.series;
    },
  },
  methods: {
    flags(lang) {
      if (lang === "en") {
        return (lang = "us");
      } else {
        return lang;
      }
    },
    getImage(thumb) {
      if (thumb !== "" && thumb !== null) {
        return "https://image.tmdb.org/t/p/w300/" + thumb;
      } else {
        return "https://picsum.photos/300/170";
      }
    },
    getVote(vote) {
      return Math.ceil(vote / 2);
    },
  },
};
</script>

<style lang="scss">
@import "~/node_modules/bootstrap/scss/bootstrap.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  max-width: 100%;
}

.voted {
  color: gold;
}

.films,
.series {
  display: flex;
  flex-wrap: wrap;
  .film,
  .serie {
    border: 1px solid black;
    min-height: 350px;
    .title {
      color: blue;
      margin-bottom: 2rem;
      height: 50px;
      overflow: hidden;
    }
    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
      object-position: top;
      height: auto;
      height: 100%;
    }
  }
}

.infos {
  background-color: black;
  width: 100%;
  height: 100%;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
}
.col-2:hover .infos {
  display: block;
}
</style>
