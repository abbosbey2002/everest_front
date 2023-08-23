import React from 'react'
import Studentadd from './student/Studentadd'
import StdudentList from './student/StdudentList'

function Student() {
  return (
    <section className='section'>
      <Studentadd />
      <StdudentList />
    </section>
  )
}

export default Student
