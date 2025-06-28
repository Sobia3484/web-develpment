import {React, useState} from 'react'
import './App.css'
import Propimg from './Propimg'
import Object from './Object'
import Array from './Array'
import Task from './Task'
import Controlcomponent from './Controlcomponent'
import Loops from './Loops'
import Useeffect from './Useeffect'
import Rendering from './Rendering'
import Usereff from './Usereff'
import Uncontrollcomponent from './Uncontrollcomponent'
import Lifting from './Lifting'
import Navbar from './Navbar'
import Props from './props'
import { Link, Route, Routes } from 'react-router'
import { UserData } from './Createcomponent'
import Component from './Component'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import Wrongpath from './Wrongpath'
import Customhook from './Customhook'
import Hide from './Hide'
import Api from './Api'





// import State from './State'
// import Changeimg from './Changeimg'

function App() {
  let arr = ["ali" ,23,123]

let obj = {
  Name : "ahmad",
  age : 21
}

function hello(name) {
console.log("this is first lifting", name);
}


function hello1(name1) {
  console.log("this is second lifting");
  
}



   
  


  return (
  <>
  {/* <Navbar/> */}
{/* <State/> */}
{/* <Hide/> */}
{/* <Changeimg/> */}
{/* <Props text = "hello world"/> */}
{/* <Propimg imag = '\pic.jpg'/> */}
{/* <Object obj = {obj}/> */}
{/* <Array arr = {arr}/> */}
{/* <Task/> */}
{/* <Controlcomponent/> */}
{/* <Loops/> */}
{/* <Useeffect/> */}
{/* <Rendering/> */}
{/* <Usereff/> */}
{/* <Uncontrollcomponent/> */}
{/* <Lifting change = {hello} change1 ={hello1}/> */}
{/* <Lifting/> */}




{/* <Link to='/'>Home</Link>
<Link to='/contact'>Contact</Link>
<Link to='/about'>About</Link>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/*' element={<Wrongpath/>}/>
</Routes> */}



  {/* <UserData.Provider value='Sobia'>
    <Component/>
  </UserData.Provider> */}



{/* <h1>heelo</h1> */}



<Customhook/>

{/* <Api/> */}

{/* <Postapi/> */}



     </>
      )
    }
      export default App;

