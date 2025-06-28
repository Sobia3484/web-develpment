import React, { useState } from 'react'

const Task = () => {
    const [num ,setNum] = useState(1)
    
    function hello() {
      setNum (4)
    }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={hello}>click me</button>
    </div>
  )
}

export default Task
