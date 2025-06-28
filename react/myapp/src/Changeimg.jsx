import React, { useState } from 'react'

const Changeimg = () => {
    const [display,setDisplay] = useState(true)
  return (
    <div>
      {display ? <img src="\pic.jpg" alt="" /> : <img src="\ss.png" alt="" />}
      <button onClick ={()=> setDisplay(!display)}><h3>Click</h3></button>
    </div>
  )
}

export default Changeimg
