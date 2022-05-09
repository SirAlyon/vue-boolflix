<template>
  <div id="app">
    <SiteHeader />
    <!-- <SiteMain /> -->
    <div class="films" v-if="!loading">
      <div class="film" v-for="(film, index) in films" :key="index">
        <div class="title">{{ film.title }}</div>
        <div class="original_title">{{ film.original_title }}</div>
        <div class="lang">
          {{ film.original_language }}
          <country-flag :country="film.original_language === 'en' ? 'us' : ''" size='normal'/>
        </div>
        <div class="review">{{ film.vote_average }}</div>
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
.films {
  display: flex;
  .film {
    padding: 1rem;
    border: 1px solid black;
    .title{
      color: blue;
      margin-bottom: 2rem;
    }
  }
}
</style>
