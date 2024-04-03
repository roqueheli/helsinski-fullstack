import React from 'react'

const Search = ({ country, setCountry }) => {
    const handleCountry = (e) => {
        e.preventDefault()
        setCountry(e.target.value)
    }

    return (
        <>        
            <div>find countries:</div>
            <input type="text" onChange={handleCountry} value={country} />
        </>
    )
}

export default Search