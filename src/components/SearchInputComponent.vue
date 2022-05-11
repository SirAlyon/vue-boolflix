<template>
  <div class="d-flex align-items-center">
    <input
      type="text"
      :value="searchText"
      @input="$emit('input', $event.target.value)"
      @keyup="$emit('keyUp')"
      @keyup.enter="$emit('keyEnter')"
    />

    <font-awesome-icon
      @click="$emit('keyEnter')"
      icon="fa-solid fa-magnifying-glass"
      class="mx-3 fs-2"
    />
  </div>
</template>

<script>
export default {
  name: "SearchInputComponent.vue",
  props: {
    searchText: String,
    
  },
};
</script>

<style scoped lang="scss">
input {
  padding: 0.5rem;
  border-radius: 2rem;
  padding: 5px 20px;
}
</style>
