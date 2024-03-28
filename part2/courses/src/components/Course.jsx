import React from 'react'
import Header from './Header'
import Content from './Content'

const tittlePrincipal = 'Web development curriculum'

const Course = ({ courses }) => {
  return (
    <>
      <Header tittle={tittlePrincipal} />
      {courses.map((course) => {
        return <Content key={course.id} parts={course.parts} tittle={course.name} />
      })}
    </>
  )
}

export default Course