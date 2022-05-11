<template>
  <div class="col-2" v-if="!loading">
    <div class="film position-relative">
      <img :src="image" alt="" />

      <div class="infos">
        <div class="title">
            <span class="fw-bold">Titolo:</span>
            {{ film.title }}
        </div>
        <div class="original_title" v-if="film.original_name !== film.name">
            <span class="fw-bold">Titolo Originale:</span>
            {{ film.original_title }}
        </div>
        <div class="lang d-flex align-items-center">
            <span class="fw-bold">Lingua:</span>
            <country-flag class="mb-1 mx-1" :country="language" size="normal" />
        </div>
        <div class="star">
          <span class="voted" v-for="s in vote" :key="'star-n' + s">
            <font-awesome-icon icon="fa-solid fa-star" />
          </span>
          <span>
            <font-awesome-icon
              icon="fa-solid fa-star"
              v-for="s in 5 - vote"
              :key="'star-n' + s"
            />
          </span>
        </div>
        <div class="overview" v-if="film.overview !== '' ">
          <span class="fw-bold">Overview:</span> 
          {{film.overview}}
        </div>
        <div class="cast" :cast="cast"> 
          <span class="fw-bold">Actor: </span>
          <span v-for="(actor, index) in cast" :key="index">{{actor}}, </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmsComponent",
  props: {
    film: Object,
    loading: Boolean,
    image: String,
    language: String,
    vote: [Number, String],
    cast: Array,
  },
};
</script>

<style scoped lang="scss">


</style>