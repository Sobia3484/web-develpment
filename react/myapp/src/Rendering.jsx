import React, { useState } from 'react'

const Rendering = () => {
    const [render,setRender] = useState(true)
  return (
    <div>
      <h1>{render? "Please login" : "login"}</h1>
      
      <button onClick={()=>setRender(!render)}>{render? "login" : "logout"}</button>
    </div>
  )
}

export default Rendering
