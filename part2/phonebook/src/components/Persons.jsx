import React from 'react'
import numbers from '../services/persons'

const Persons = ({ filteredPersons, handleDelete }) => {    
    return (
        <>
            <h2>Numbers</h2>
            <ul>
                {filteredPersons?.map((person) => <li key={person.id}>{`${person.name} ${person.number}`} <button onClick={(e) => handleDelete(e, person)} type='button'>delete</button></li>)}
            </ul>
        </>
    )
}

export default Persons