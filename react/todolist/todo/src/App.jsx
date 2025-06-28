import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [todolist, setTodolist] = useState([])
let saveToDoList = (event)=>{
 

  let toname = event.target.toname.value;
  // alert(toname)
  event.preventDefault();

      if (!todolist.includes(toname)) {
    let finaltodolist = [...todolist,toname]
    setTodolist(finaltodolist)
  }
  else{
    alert("Already exist")
  }

}
let list = todolist.map((value,index)=>{
  return (
    <Todolistitem value={value} key={index} indexNumber={index} 
    todolist={todolist}
    setTodolist={setTodolist}
    />
  )
})

  return (
    <>
      <h1> TO Do list</h1>
      <form onSubmit={saveToDoList}>
      <input type="text" name='toname' /> <button>Save</button>
      </form>
      <div className="outerdiv">
        <ul>
          {list}
        </ul>
      </div>

     </>
      )
    }
      export default App;
       function Todolistitem({value, indexNumber, todolist, setTodolist}){
      let deleterow= ()=>{
        let finaldata = todolist.filter((v,i)=>i!=indexNumber)
        setTodolist(finaldata)
      }
     
        return(

             <li>{value}<span onClick={deleterow}><i class="fa-solid fa-xmark"></i></span></li>
        )
      }
