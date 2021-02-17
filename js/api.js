const apiKeyWeather = '4ef700dfdc666439b2990592c804906d'
const baseURL = 'https://api.openweathermap.org/data/2.5/onecall?'

export const getWeather = async (lat, lon, lang) => {
    try {
        const response = await fetch(`${baseURL}lat=${lat}&lon=${lon}&exclude=hourly,minutely&lang=${lang}&units=metric&appid=${apiKeyWeather}`)
        if (!response.ok) throw new Error('City is not found')
        const json = await response.json()
        return { json }
    } catch (e) {
        return { message: e.message }
    }
}