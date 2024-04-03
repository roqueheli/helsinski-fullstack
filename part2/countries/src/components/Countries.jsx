import React, { useState } from 'react'
import Detail from './Detail';
import '../index.css'

const Countries = ({ countries }) => {
    const [show, setShow] = useState(false)
    const [detailId, setDetailId] = useState(false)

    const handleShow = (e, idx) => {
        e.preventDefault()
        setDetailId(e.target.id)
        e.target.id === idx ? setShow(!show) : setShow(false)
    }

    return ( 
        countries?.length > 10
        ?
            <p>Too many matches, specify another filter</p>
        :
            countries?.map((country) => {
            return (
                <div key={country.maps.googleMaps}>
                    <div className='contry-content'>
                        <p>{`${country.name.common}`}</p>
                        <button type="button" id={country.maps.googleMaps} onClick={(e) => handleShow(e, country.maps.googleMaps)}>{detailId === country.maps.googleMaps && show ? 'hide' : 'show'}</button>
                    </div>
                    {detailId === country.maps.googleMaps && show ? <Detail country={country} /> : null}
                </div>
            )})
    )
}

export default Countries