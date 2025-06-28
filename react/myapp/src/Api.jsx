import React, { useEffect, useState } from 'react'

const Api = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        find()
    },[])

    async function find() {
        // let url = 'http://dummyjson.com/users'

        let url = 'http://localhost:3000/users'
        let response = await fetch(url)
        let result = await response.json()
        console.log(result);
        
        setData(result)
    }
  return (
    <div>
      {data.map((user)=>(
        <ul key={user.id}>
            <li>{user.Name}</li>
            <li>{user.age}</li>
        </ul>
      ))}
    </div>
  )
}

export default Api
