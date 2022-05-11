<template>

  <img @click="reload" src="@/assets/img/boolflix.png" alt="" />
</template>

<script>
export default {
  name: "SiteLogoComponent",
  methods:{
      reload(){
          window.location.reload()
      }
  }
};
</script>

<style scoped lang="scss">
    img:hover{
        cursor: pointer;
    }
</style>
