import React, { useState } from 'react'

const Addition = ({ persons, setPersons }) => {
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
          number: newPhone,
          id: persons.length + 1
        }
        
        persons.find((el) => el.name === newName) === undefined 
        ?
            setPersons(persons.concat(newPerson)) 
        : 
            alert(`${newName} is already added to phonebook`)

        setNewName('')
        setNewPhone('')
    }

    return (
        <>
            <h2>Add a new</h2>
            <form onSubmit={handleAdd}>
                <div>name: <input type='text' onChange={handleChange} value={newName} /></div>
                <div>number: <input type='tel' onChange={handleChange}  value={newPhone} /></div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default Addition