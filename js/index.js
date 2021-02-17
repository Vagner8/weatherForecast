import { getWeather } from "./api.js"
import { createItem } from "./components.js"
import { buttonControl, getLanguage, cleanerItem, cleanerObj  } from "./tools.js"

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
        lang: getLanguage(),
        locales: navigator.language || navigator.userLanguage
    }

    buttonControl(btn, true)

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
        buttonControl(btn, false)
        state.place = autocomplete.getPlace()
        state.cityName = state.place.name
        state.lat = state.place.geometry.location.lat()
        state.lon = state.place.geometry.location.lng()
    })

    btn.addEventListener('click', () => {
        const {lat, lon, cityName, lang, locales} = state
        createItem(row, 'showSpinner')
        const respose = getWeather(lat, lon, lang, cityName)
            respose.then(date => {
                cleanerItem(row)
                createItem(row, date, cityName, locales)
            })
        buttonControl(btn, true)
        cleanerObj(state)
    })

    input.addEventListener('change', (e) => {
        e.target.value = ''
    })

    document.addEventListener('keydown', function (event) {
        if (event.code == 'Enter' || event.code == 'NumpadEnter') {
            event.preventDefault()
        }
    })
})