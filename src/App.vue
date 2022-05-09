<template>
  <div id="app">
    <SiteHeader />
    <!-- <SiteMain /> -->
    <div class="films" v-if="!loading">
      <div class="film" v-for="(film, index) in films" :key="index">
        <div class="title">{{ film.title }}</div>
        <div class="original_title">{{ film.original_title }}</div>
        <img :src="getImage(film.backdrop_path)" alt=""/>

        <div class="lang">
          {{ film.original_language }}
          <country-flag
            :country="flags(film.original_language)"
            size="normal"
          />
        </div>
        <div class="review">{{ film.vote_average }}</div>
      </div>
    </div>
    <div class="series" v-if="!loading">
      <div class="serie" v-for="(serie, index) in series" :key="index">
        <div class="title">{{ serie.name }}</div>
        <div class="original_title">{{ serie.original_name }}</div>
        <img
          :src="getImage(serie.backdrop_path)"
          alt=""
        />
        <div class="lang">
          {{ serie.original_language }}
          <country-flag
            :country="flags(serie.original_language)"
            size="normal"
          />
        </div>
        <div class="review">{{ serie.vote_average }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeaderComponent.vue";
import state from "@/state.js";

//import SiteMain from '@/components/SiteMainComponent.vue'

export default {
  name: "App",
  components: {
    SiteHeader,
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
    getImage(thumb){
      if (thumb !== '' && thumb !== null){
        return 'https://image.tmdb.org/t/p/w300/' + thumb
      } else {
        return 'https://picsum.photos/300/170'
      }
    }
  },
};
</script>

<style lang="scss">
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
.films,
.series {
  display: flex;
  .film,
  .serie {
    padding: 1rem;
    border: 1px solid black;
    .title {
      color: blue;
      margin-bottom: 2rem;
    }
  }
}
</style>
