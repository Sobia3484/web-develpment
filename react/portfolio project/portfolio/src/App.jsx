import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Technology from './Components/Technology'
import Project from './Components/Project'
import Experience from './Components/Experience'
import Contact from './Components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Technology/>
    {/* <Project/> */}
    {/* <Experience/> */}
    <Contact/>
    </>
  )
}

export default App
