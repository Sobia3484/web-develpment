import React, { useState } from 'react'

const State = () => {
    const [fruite,setFruite] = useState("Apple")
    const [count,setCount] = useState(0)
  return (
    <>
        <h1>{fruite}</h1>
      <button onClick={()=> setFruite("Banana")}>Change</button>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count+1)}>Click</button>
      <button onClick={()=> setCount(count-1)}>Click</button>
    </>
  )
}
export default State;
