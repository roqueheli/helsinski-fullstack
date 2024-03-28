import React from 'react'
import Header from './Header'

const Content = ({ parts, tittle }) => {
    const total = parts.reduce((acum, num) => {
        return acum + num.exercises
    }, 0)

    return (
        <>
            <Header tittle={tittle} />
            {parts.map((part) => {
                return (<p key={part.id}>{`${part.name} ${part.exercises}`}</p>)
            })}
            <p style={{fontWeight: 'bold'}}>{`total of ${total} excercises`}</p>
        </>
    )
}

export default Content