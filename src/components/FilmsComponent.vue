<template>
  <div class="col-2" v-if="!loading">
    <div class="film position-relative">
      <img :src="image" alt="" />

      <div class="infos">
        <div class="title">{{ film.title }}</div>
        <div class="original_title">{{ film.original_title }}</div>

        <div class="lang">
          {{ film.original_language }}
          <country-flag :country="language" size="normal" />
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
  },
};
</script>

<style scoped lang="scss">

.infos{
    background-color: black;
    width: 100%;
    height: 100%;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    color: white;
}
.col-2:hover .infos{
    display: block;
}
</style>