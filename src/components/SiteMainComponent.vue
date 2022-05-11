<template>
  <main>
    <div class="container-fluid" v-if="!loading && films.length > 0">
      <div class="row films gy-4">
        <h2 class="col-12">Film:</h2>
        <Films
          :film="film"
          :loading="loading"
          :image="getImage(film.poster_path)"
          :language="flags(film.original_language)"
          :vote="getVote(film.vote_average)"
          v-for="(film, index) in films"
          :key="'film' + index"
          @hook:mounted="getFilmCast(film.id)"
          :cast="filmCast[index]"
          :genres="filmGenre"
        />
      </div>
      <div class="row series gy-4">
        <h2 class="col-12">Serie TV:</h2>
        <Series
          :serie="serie"
          :loading="loading"
          :image="getImage(serie.poster_path)"
          :language="flags(serie.original_language)"
          :vote="getVote(serie.vote_average)"
          v-for="(serie, index) in series"
          :key="'serie' + index"
          @hook:mounted="getSerieCast(serie.id)"
          :cast="serieCast[index]"
        />
      </div>
    </div>
    <div class="empty" v-else>Nothing to show here...</div>
  </main>
</template>

<script>
import state from "@/state.js";
import Films from "@/components/FilmsComponent.vue";
import Series from "@/components/SeriesComponent.vue";
import axios from "axios";
export default {
  name: "SiteMain",
  components: {
    Films,
    Series,
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
    serieCast() {
      return state.serieCast;
    },
    filmCast() {
      return state.filmCast;
    },
    filmGenre(){
      return state.filmGenre
    }
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
    getSerieCast(id) {
      axios
        .get(
          "https://api.themoviedb.org/3/tv/" +
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
          //console.log(state.serieCast);
        })
        .catch((error) => {
          console.log(error);
          const emptyArray = [];
          state.serieCast.push(emptyArray);
          //console.log(state.serieCast);
        });
    },
    getFilmCast(id) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            id +
            "/credits?api_key=3672eed0b59fb1e933fa0e484da2be73&language=en-US"
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
          state.filmCast.push(array);
          //console.log(state.filmCast);
        })
        .catch((error) => {
          console.log(error);
          const emptyArray = [];
          state.filmCast.push(emptyArray);
          console.log(state.filmCast);
        });
    },
  },
};
</script>

<style lang="scss">
img {
  max-width: 100%;
}

.voted {
  color: gold;
}

.container-fluid {
  padding-right: 5rem !important;
  padding-left: 5rem !important;
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
    animation: fadeInRight 1s;

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
      overflow-y: auto;
      scrollbar-width: thin;
      font-size: 1.5rem;
    }
    .infos > div {
      margin-top: 0.5rem;
    }
  }
  h2 {
    margin-top: 4rem !important;
    font-size: 5rem !important;
    animation: fadeInLeft 2s;
  }
}

.col-2:hover .infos {
  display: block;
}

.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  height: calc(100vh - 150px);
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>