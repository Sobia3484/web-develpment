import React from 'react'
import useDisplay from './useDisplay'

const Customhook = () => {
    const {display,setnum} = useDisplay(false)
  return (
    <div>
      <h1>{display? "Show":"Hide"}</h1>
      <button onClick={()=>setnum()}>{display? "Hide":"Show"}</button>
    </div>
  )
}

export default Customhook
