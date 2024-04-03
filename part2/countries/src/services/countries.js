import axios from "axios"
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/'
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q='

const getAll = async () => {
    return await axios.get(`${baseUrl}api/all`).then((rs) => rs.data)
}

const getByName = async (country) => {
    return await axios.get(`${baseUrl}api/name/${country}`).then((rs) => rs.data)
}

const getWeather = async (city) => {
    return await axios.get(`${weatherUrl}${city}&APPID=${import.meta.env.VITE_APIKEY}`).then((rs) => rs.data)
}

export default { getAll, getByName, getWeather }