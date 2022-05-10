<template>
  <div id="app">
    <SiteHeader />
    <!-- <SiteMain /> -->
    <div class="container">
      <div class="row">
        <h2>Film:</h2>
        <Films
          class="films g-2"
          :film="film"
          :loading="loading"
          :image="getImage(film.poster_path)"
          :language="flags(film.original_language)"
          :vote="getVote(film.vote_average)"
          v-for="(film, index) in films"
          :key="'film' + index"
        />
        <h2>Serie TV:</h2>
        <Series
          class="series g-2"
          :serie="serie"
          :loading="loading"
          :image="getImage(serie.poster_path)"
          :language="flags(serie.original_language)"
          :vote="getVote(serie.vote_average)"
          v-for="(serie, index) in series"
          :key="'serie' + index"
          @hook:mounted="getCast(serie.id, 'tv/')"
          :cast="cast[index]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeaderComponent.vue";
import Films from "@/components/FilmsComponent.vue";
import Series from "@/components/SeriesComponent.vue";
import axios from "axios";

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
    cast() {
      return state.serieCast;
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
        return "https://image.tmdb.org/t/p/w342/" + thumb;
      } else {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAESCAMAAAB5He/JAAAAMFBMVEXn5+fGxsbOzs7KysrS0tLCwsLY2Njq6urj4+PAwMDX19fm5ubT09Pe3t7Ly8vPz8+5Mr17AAAClElEQVR4nO3c23aiMBSAYQoxRsjh/d92JCT2sFZtZxs3jfzfXHmR9i/FHFx0hgEAAAAAAAAAAAAAAAAAAAAAAADAHcE2Nlun0u1Nc/OiEd6+2ySNS/6McEP4vfDU3qgRbsf2IuF3hPLN6m9ZKH0ar3jFZ3deLcJfgAnDOvz6jlG74qU0lJcuisLn+uXMXuHLY+Fn32n4QPiPwhPCNWeV/q54CbdlJxru5X3Pl1SnPqukeTsFGFl4Hb7dKSz5LxkuvKnv44oT/hfD4+qR2vfhmuEmuMzLqpPdhlu9/fiXvYqThdePgJZtAetvr8J+nPBXD1e8x9vMKn63WaW/efx9ye9z5WyK8JcM5wT0AbcK4X8wvKycoZ+Vs9+9Sl6nY6vdoeKHnlN2C59EfA1P+SXhhH8bft473MnCTf251cNvJyBZ+Fjn8agd3hbhhBNOOOHa4aMNK2tkpXHOw4NXX4BuDyHIwusjkm7UDj/s7pBwwn8Z3vtBYlAP99sjqtL1aKyPqKpPh20RTjjhhBOuHR79nEVhatqGJ/Xw+bGDRP3rNv2Vs9HuUH+vcthtLeGHCxceJHZ4c85vmSl/61Ze/q+4HSSWMOWXiuFvU36aeZJ1X4fn8VMZrxneFOGEE054v+HbPC6eyD8P727lHPRXTlteOll4ql8uaoffdoeycFM/Zu4tPBF+uPDu3pzX6XC4/lusLHy/6XAa8/+hk6QLUNyGbxecJZ9wwgknnPBfh/f6SdbRT0BLb9taTkCEdxPe3QnIu/WayU9A7np+GnY5ASW/Ep+ARrMON5yACD9G+Ekl/HJq7qIR7p8RHn7+vg+z7btPKvf44k+Xxm575Cc7N6fTDQAAAAAAAAAAAAAAAAAAAAAAAEDXP1vve810a/mdAAAAAElFTkSuQmCC";
      }
    },
    getVote(vote) {
      return Math.ceil(vote / 2);
    },
    getCast(id, movieType) {
      axios
        .get(
          "https://api.themoviedb.org/3/" +
            movieType +
            id +
            "/season/1/credits?api_key=3672eed0b59fb1e933fa0e484da2be73&language=en-US"
        )
        .then((response) => {
          //console.log(response.data.cast);
          const array = [];
          response.data.cast.forEach((actor) => {
            if (!array.includes(actor.name) && array.length !== 5) {
              array.push(actor.name);
            }
          });
          //console.log(array);
            state.serieCast.push(array);
            console.log(state.serieCast);
        })
        .catch((error) => {
          console.log(error);
          const emptyArray = []
          state.serieCast.push(emptyArray)
          console.log(state.serieCast);
        });
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
  color: #ffffff;
  background-color: rgb(24, 24, 24);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h2 {
  margin-top: 2rem !important;
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
    min-height: 350px;
    width: 100%;
    height: 100%;
    border-radius: 1rem;

    .title {
      overflow: hidden;
    }
    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
      object-position: top;
      height: auto;
      height: 100%;
      border-radius: 0.3rem;
    }
  }
}

.infos {
  padding: 1.5rem 0.5rem;
  background-color: black;
  width: 100%;
  height: 100%;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  overflow-y: scroll;
  scrollbar-width: thin;
}
.col-2:hover .infos {
  display: block;
}
</style>
