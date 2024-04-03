import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import Addition from './components/Addition'
import Filter from './components/Filter'
import numbers from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filterName, setFilterName] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    numbers
    .getAll()
    .then(response => setPersons(response))
  }, [])

  const handleDelete = (e, person) => {
    e.preventDefault()
    window.confirm(`Delete ${person.name} ?`)
    ? 
        numbers
        .eliminate(person.id)
        .then((returnedPerson) => {
            setPersons(filteredPersons.filter((persons) => persons.id !== returnedPerson.id))
        })
        .catch(error => {
          setMessage(`${person.name} was already deleted from server`)
          setPersons(filteredPersons.filter((persons) => persons.id !== person.id))
        })
    : null
  }

  const filteredPersons = filterName === '' ? persons : persons.filter((person) => person.name.toLowerCase().includes(filterName.toLowerCase()))

  return (
    <>
      <h2>Phonebook</h2>
      <Notification message={message} setMessage={setMessage} />
      <Filter filterName={filterName} setFilterName={setFilterName} />
      <Addition persons={persons} setPersons={setPersons} setMessage={setMessage} />
      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete} />
    </>
  )
}

export default App