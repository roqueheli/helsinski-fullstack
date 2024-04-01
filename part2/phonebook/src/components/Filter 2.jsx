import React from 'react'

const Filter = ({ filterName , setFilterName }) => {
    const handleFilter = (e) => {
      e.preventDefault()
      setFilterName(e.target.value)
    }

    return (
        <div>filter shown with: <input type='text' onChange={handleFilter} value={filterName} /></div>
    )
}

export default Filter