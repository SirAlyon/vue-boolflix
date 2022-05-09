<template>
  <div id="app">
    <SiteHeader />
    <!-- <SiteMain /> -->
    <div class="films"></div>
    <div class="film" v-for="(film, index) in films" :key="index">
      <div class="title">{{ film.title }}</div>
      <div class="original_title">{{ film.original_title }}</div>
      <div class="lang">{{ film.original_language }}</div>
      <div class="review">{{ film.vote_average }}</div>
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
</style>
