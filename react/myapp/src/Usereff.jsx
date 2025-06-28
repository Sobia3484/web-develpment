import React, { useRef } from 'react'

const Usereff = () => {
    const a = useRef()
    function hello(e) {
        e.preventDefault();
        let b = a.current.value;
        alert(b)
        console.log(b)
    }
    
  return (
    <div>
      <form action="" onSubmit={hello} >
        <input ref={a} type="text" />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Usereff