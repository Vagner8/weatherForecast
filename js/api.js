const apiKeyWeather = '4ef700dfdc666439b2990592c804906d'

export const getWeather = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=${apiKeyWeather}`)
        if (!response.ok) throw new Error('City is not found')
        const json = await response.json()
        return { json }
    } catch (e) {
        return { message: e.message }
    }
}