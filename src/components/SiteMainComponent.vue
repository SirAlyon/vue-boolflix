<template>
  <main>
    
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
