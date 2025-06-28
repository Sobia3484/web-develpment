import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [count,setCount] =useState(0)
    function hello() {
        console.log("use effect")
    }
    useEffect(()=>{
        hello()
    },[])
    
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Click</button>
    </div>
  )
}

export default Useeffect
