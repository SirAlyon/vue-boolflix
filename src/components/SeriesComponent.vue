<template>
  <div class="col-2" v-if="!loading">
    <div class="serie position-relative">
      <img :src="image" alt="" />
      <div class="infos">
        <div class="title">
          <span class="fw-bold">Titolo:</span> {{ serie.name }}
        </div>
        <div class="original_title" v-if="serie.original_name !== serie.name">
          <span class="fw-bold">Titolo Originale:</span>
          {{ serie.original_name }}
        </div>
        <div class="lang d-flex align-items-center">
          <span class="fw-bold">Lingua:</span>
          <country-flag class="mb-1" :country="language" size="normal" />
        </div>
        <div class="star">
          <span class="fw-bold">Voto:</span>
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
        <div class="overview" v-if="serie.overview !== ''">
          <span class="fw-bold">Overview:</span>
          {{ serie.overview }}
        </div>
        <div class="cast" :cast="cast">
          <span v-for="(actor, index) in cast" :key="index">
            <span class="fw-bold" v-if="index <= 0">Actor: </span>
            <span> {{ actor }},</span>
          </span>
        </div>
        <div class="genre" :genres="genres">
          <span class="fw-bold">Genere:</span>

          <span v-for="(genre, index) in genres" :key="index">
            <span v-if="serie.genre_ids.includes(genre.id)">
              {{ genre.name }},
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeriesComponent",
  props: {
    serie: Object,
    loading: Boolean,
    image: String,
    language: String,
    vote: [Number, String],
    cast: Array,
    genres: Array,
  },
};
</script>
