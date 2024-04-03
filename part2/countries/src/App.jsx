import { useState, useEffect } from 'react'
import Search from './components/Search'
import Countries from './components/Countries'
import countryService from './services/countries'

function App() {
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
      if (country !== '') {
          countryService
          .getAll()
          .then((data) => {
              setCountries(data.filter((state) => state.name.common.toLowerCase().includes(country.toLocaleLowerCase())))
          })
          .catch((er) => setMessage(er))
      }
  }, [country])

  return (
    <>
      <Search country={country} setCountry={setCountry} />
      <Countries countries={countries} />
    </>
  )
}

export default App
