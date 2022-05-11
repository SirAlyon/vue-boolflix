import Vue from 'vue'
import CountryFlag from 'vue-country-flag'

Vue.component('country-flag', CountryFlag)

const state = Vue.observable({
    films: null,
    series: null,
    loading: true,
    serieCast: [],
    filmCast: [],

})

export default state