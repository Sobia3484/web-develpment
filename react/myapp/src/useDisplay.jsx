import React, { useState } from 'react'

const useDisplay = (parm) => {
    const [display , setDisplay] = useState(parm)
    
    const setnum = () =>{
        setDisplay(prev => !prev)
    };
  return {display ,setnum}
}

export default useDisplay
