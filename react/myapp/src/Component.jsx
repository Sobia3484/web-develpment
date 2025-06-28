import React, { useContext } from 'react'
import { UserData } from './Createcomponent'

const Component = () => {
    const Name = useContext(UserData)
  return (
    <div>
      <h1>my name is: {Name} </h1>
    </div>
  )
}

export default Component
