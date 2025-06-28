import React from 'react'

const Loops = () => {
    const arr = ["ali",1,3,5,"ahmad"]
    const user = [
        {id:1, name:"Ali",class:"BSCS"},
        {id:2, name:"Ahmad",class:"BSSE"},
        {id:3, name:"Hassan",class:"BSIT"}
    ]
  return (
    <div>
       {arr.map((a,index)=>(
        <li key={index}>{index}----------{a}</li>
      ))} 
      {/* {user.map((b,index)=>(
        <li key={user.id}>{b.name}</li>
      ))} */}
    </div>
  )
}

export default Loops
