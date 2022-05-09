<template>
<!--   <div class="series" v-if="!loading"> -->
    <div class="col-2">
      <div class="serie">
        <div class="title">{{ serie.name }}</div>
        <div class="original_title">{{ serie.original_name }}</div>
        <img :src="image" alt="" />
        <div class="lang">
          {{ serie.original_language }}
          <country-flag
            :country="language"
            size="normal"
          />
        </div>
        <div class="star">
          <span
            class="voted"
            v-for="s in vote"
            :key="'star-n' + s"
          >
            <font-awesome-icon icon="fa-solid fa-star" />
          </span>

          <span>
            <font-awesome-icon
              icon="fa-solid fa-star"
              v-for="s in 5 - vote"
              :key="'star-n' + s"
            />
          </span>
        </div>
      </div>
    </div>
<!--   </div> -->
</template>

<script>

export default {
    name: 'SeriesComponent',
    props:{
        serie: Object,
        loading: Boolean,
        image: String,
        language: String,
        vote: [Number, String],
    }
}
</script>
