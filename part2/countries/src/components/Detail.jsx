import React, { useEffect, useState } from 'react'
import countryService from '../services/countries'

const Detail = ({ country }) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        countryService
        .getWeather(`${country.capital[0]},${country.altSpellings[0].toLowerCase()}`)
        .then((data) => setWeather(data))
    }, [])

    return (
        <>
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>
            <h3>languages:</h3>
            <ul>
                {Object.values(country.languages)?.map((lang, idx) => <li key={idx}>{lang}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
            <div>
                <h2>{`Weather in ${country.capital}`}</h2>
                <p>{`temperature ${(((5/9)/10)*(weather?.main.temp-32)).toFixed(2)} celcius`}</p>
                <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt={weather?.weather[0].description} />
                <p>{`wind ${weather?.wind.speed} m/s`}</p>
            </div>
        </>
    )
}

export default Detail