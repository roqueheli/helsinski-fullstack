import React, { useState } from 'react'
import numbers from '../services/persons'

const Addition = ({ persons, setPersons, setMessage }) => {
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    
    const handleChange = (e) => {
        e.preventDefault()
        e.target.type === 'tel' ? setNewPhone(e.target.value) : setNewName(e.target.value)
    }
    
    const handleAdd = (e) => {
        e.preventDefault()
        const newPerson = {
          name: newName,
          number: newPhone
        }
        
        const encountered = persons.find((el) => el.name === newName)
        encountered === undefined 
        ?
            numbers
                .create(newPerson)
                .then((returnedPerson) => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewPhone('')
                    setMessage(`${returnedPerson.name} succesfully added`)
                })
        : 
            confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
            ?
                numbers
                .update(encountered.id, newPerson)
                .then((returnedPerson) => {
                    const newPersons = persons.map((person) => person.id === returnedPerson.id ? { ...person, number: returnedPerson.number } : person)
                    setPersons(newPersons)
                    setNewName('')
                    setNewPhone('')
                    setMessage(`${returnedPerson.name} succesfully modified with number: ${returnedPerson.number}`)
                })
                .catch(error => alert(error))
            :
                null
    }

    return (
        <>
            <h2>Add a new</h2>
            <form onSubmit={handleAdd}>
                <div>name: <input type='text' onChange={handleChange} value={newName} /></div>
                <div>number: <input type='tel' onChange={handleChange}  value={newPhone} /></div>
                <button type="submit">add</button>
            </form>
        </>
    )
}

export default Addition