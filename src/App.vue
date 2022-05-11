<template>
  <div id="app">
    <SiteHeader />
    <SiteMain />
    
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeaderComponent.vue";
import SiteMain from '@/components/SiteMainComponent.vue'

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteMain
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

</style>
