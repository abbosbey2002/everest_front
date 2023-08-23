import React from 'react'
import Groupadd from './groups/Groupadd'
import GroupsList from './groups/GroupList'

function Group() {
  return (
    <section className='section'>
      <Groupadd />
      <GroupsList />
    </section>
  )
}

export default Group
