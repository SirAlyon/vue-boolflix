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
      @click="getApi"
      icon="fa-solid fa-magnifying-glass"
      class="mx-2 fs-3"
    />
  </div>
</template>

<script>

export default {
    name: 'SearchInputComponent.vue',
    props:{
        searchText: String
    }

}
</script>
