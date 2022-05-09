<template>
  <main>
    <div class="main_top">
        <div class="film" v-for="(film, index) in films" :key="index">
          <div class="title">{{ film.title }}</div>
          <div class="original_title">{{ film.original_title }}</div>
          <div class="lang">{{ film.original_language }}</div>
          <div class="review">{{ film.vote_average }}</div>
        </div>
    </div>
  </main>
</template>

<script>
import state from "@/state.js";
export default {
  /*  */
  name: "SiteMain",
  data(){
      return {
          films: null,
          loading: true,
      }
  },
  mounted(){
      console.log(state);
  },

};
</script>
