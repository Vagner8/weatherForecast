import { getWeather } from "./api.js"

document.addEventListener("DOMContentLoaded", () => {
    const row = document.querySelector('.roof')
    const btn = document.querySelector('.btn')
    const input = document.querySelector('.form-control')

    const autocomplete = new google.maps.places.Autocomplete(input)

    const state = {
        lat: '',
        lon: '',
        place: '',
        cityName: '',
        locales: navigator.language || navigator.userLanguage
    }

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
        buttonControl(btn, false)
        state.place = autocomplete.getPlace()
        state.cityName = state.place.name
        state.lat = state.place.geometry.location.lat()
        state.lon = state.place.geometry.location.lng()
    })

    document.addEventListener('keydown', function (event) {
        if (event.code == 'Enter' || event.code == 'NumpadEnter') {
            event.preventDefault()
        }
    })

    getWeather()
})