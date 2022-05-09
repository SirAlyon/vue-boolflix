<template>
  <div id="app">
    <SiteHeader />

  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeaderComponent.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0;padding: 0;box-sizing: border-box;
}
</style>
