import React from 'react'

const Lifting = ({change, change1}) => {
  return (
    <div>
      <button onClick={()=>{change("ali")}}>click</button>

      <button onClick={()=>{change1("ahmad")}}>click</button>
    </div>
  )
}

export default Lifting
