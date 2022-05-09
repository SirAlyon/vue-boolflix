<template>
  <div id="app">
    <SiteHeader />
    <!-- <SiteMain /> -->
    <div class="container">
      <div class="row">
        <!-- <div class="films" v-if="!loading">
          <div class="col-2" v-for="(film, index) in films" :key="index">
            <div class="film">
              <div class="title">{{ film.title }}</div>
              <div class="original_title">{{ film.original_title }}</div>
              <img :src="getImage(film.backdrop_path)" alt="" />

              <div class="lang">
                {{ film.original_language }}
                <country-flag
                  :country="flags(film.original_language)"
                  size="normal"
                />
              </div>
              <div class="star">
                <span class="voted"
                  v-for="s in getVote(film.vote_average)"
                  :key="'star-n' + s">
                  <font-awesome-icon icon="fa-solid fa-star"/>
                </span>

                <span>
                  <font-awesome-icon
                    icon="fa-solid fa-star"
                    v-for="s in 5 - getVote(film.vote_average)"
                    :key="'star-n' + s"
                  />
                </span>
              </div>
            </div>
          </div>
        </div> -->
        <h2>Films List:</h2>
        <Films class="films" :film="film" :loading="loading" :image="getImage(film.backdrop_path)" :language="flags(film.original_language)" :vote="getVote(film.vote_average)" v-for="(film, index) in films" :key="'film' + index"/>
        <h2>Series List:</h2>
        <!-- <div class="series" v-if="!loading">
          <div class="col-2" v-for="(serie, index) in series" :key="index">
            <div class="serie">
              <div class="title">{{ serie.name }}</div>
              <div class="original_title">{{ serie.original_name }}</div>
              <img :src="getImage(serie.backdrop_path)" alt="" />
              <div class="lang">
                {{ serie.original_language }}
                <country-flag
                  :country="flags(serie.original_language)"
                  size="normal"
                />
              </div>
              <div class="star">
                <span class="voted"
                  v-for="s in getVote(serie.vote_average)"
                  :key="'star-n' + s">
                  <font-awesome-icon icon="fa-solid fa-star"/>
                </span>

                <span>
                  <font-awesome-icon
                    icon="fa-solid fa-star"
                    v-for="s in 5 - getVote(serie.vote_average)"
                    :key="'star-n' + s"
                  />
                </span>
              </div>
            </div>
          </div>
        </div> -->
         <Series class="series" :serie="serie" :loading="loading" :image="getImage(serie.backdrop_path)" :language="flags(serie.original_language)" :vote="getVote(serie.vote_average)" v-for="(serie, index) in series" :key="'serie' + index" />
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
    Series
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
    padding: 1rem;
    border: 1px solid black;
    min-height: 350px;
    .title {
      color: blue;
      margin-bottom: 2rem;
      height: 50px;
      overflow: hidden;
    }
  }
}
</style>
