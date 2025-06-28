import React, { useState } from 'react'

const Controlcomponent = () => {
    const[text,setText] = useState('')

    const handlesubmit = (e) =>{
    e.preventDefault();
    alert("submit successfully")
    setText("")
    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='Enter name' value={text} onChange={(e)=>setText(e.target.value)}/><br></br>
        <h1>{text}</h1>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Controlcomponent
