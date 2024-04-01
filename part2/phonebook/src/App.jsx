import { useState } from 'react'
import Persons from './components/Persons'
import Addition from './components/Addition'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filterName, setFilterName] = useState('')

  const filteredPersons = filterName === '' ? persons : persons.filter((person) => person.name.toLowerCase().includes(filterName.toLowerCase()))
  
  return (
    <>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} setFilterName={setFilterName} />
      <Addition persons={persons} setPersons={setPersons} />
      <Persons filteredPersons={filteredPersons} />
    </>
  )
}

export default App