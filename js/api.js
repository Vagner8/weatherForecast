const apiKeyWeather = '4ef700dfdc666439b2990592c804906d'
const apiKeyPhoto = '2757829-e8c8f3c44b73b0fd883bba9e1'

const baseURL = 'https://api.openweathermap.org/data/2.5/onecall?'

export const getWeather = async (lat, lon, lang, cityName) => {
    try {
        const response = await fetch(`${baseURL}lat=${lat}&lon=${lon}&exclude=hourly,minutely&lang=${lang}&units=metric&appid=${apiKeyWeather}`)
        if (!response.ok) throw new Error('City is not found')
        const json = await response.json()
        const photo = await getPhoto(cityName)
        return { json, photo }
    } catch (e) {
        return { message: e.message }
    }
}

const getPhoto = async (search) => {
    const response = await fetch(`https://pixabay.com/api/?key=${apiKeyPhoto}&q=${search}&image_type=photo`)
    const json = await response.json()
    if (json.hits.length === 0) return "https://cdn.pixabay.com/photo/2021/01/27/08/42/valentine-5954177__340.jpg"
    const onePhoto = await json.hits[0].largeImageURL
    return onePhoto
}