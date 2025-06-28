import React, { useState } from 'react'

const Postapi = () => {
    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])


    const user = async ()=>{
        let url = 'http://localhost:3000/users'
        let response = await fetch(url,{
          method: 'POST',
           body: JSON.stringify(name, age, class)
        })
             let result = await response.json()
        console.log(result);


    }
  return (
    <div>
      <input type="text"
      value={name}
      onChange={(event)=> setName(event.target.value)}
      placeholder='Enter name'
      />
       <input type="text"
      value={email}
      onChange={(event)=> setEmail(event.target.value)}
      placeholder='Enter Email'
      />
       <input type="text"
      value={password}
      onChange={(event)=> setPassword(event.target.value)}
      placeholder='Enter Password'
      />
    </div>
  )
}

export default Postapi
