import React, { useState } from 'react'

const Hide = () => {
    const [display,setDisplay] = useState(false);
  return (
    <div>
        { display ? <h1>Show</h1> : <h1>Hide</h1> }
        <button onClick={()=>setDisplay(!display)}><h3>click on</h3></button>
    </div>
  )
}
export default Hide;