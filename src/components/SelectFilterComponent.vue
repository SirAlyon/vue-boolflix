<template>
  <div>
    <select name="selectFilmGenre" id="" @change="$emit('changeFilm', $event)">
      <option value="">Filter Film by Genere</option>
      <option
        :filmGenre="filmGenre"
        :value="genre.id"
        v-for="(genre, index) in filmGenre"
        :key="index"
      >
        {{ genre.name }}
      </option>
    </select>
    <select name="selectSerieGenre" id="" @change="$emit('changeSerie', $event)">
      <option value="">Filter Serie by Genere</option>
      <option
        :serieGenre="serieGenre"
        :value="genre.id"
        v-for="(genre, index) in serieGenre"
        :key="index"
      >
        {{ genre.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectComponent",
  props:{
      filmGenre: Array,
      serieGenre: Array
  },
};
</script>
