import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Welcome from './Welcome'
import Skills from './Skills'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Navbar from './assets/componenets/Navbar'
import State from './hooks/State'
import Form from './hooks/Form'
import Effects from './hooks/Effects'
import User from './assets/componenets/User'
import LikeDislike from './hooks/LikeDislike'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Service' element={<Service/>}/>
       <Route path='/state' element={<State/>}/>
       <Route path='/form' element={<Form/>}/>
       <Route path='/effect' element={<Effects/>}/>
       <Route path='/user' element={<User/>}/>
       <Route path='/like' element={<LikeDislike/>}/>
    </Routes>
    {/* <Welcome name='Deepan' country='India'/> */}
    {/* <Skills skill={['React','Node','Express','MongoDb']}/>   */}
          {/* <h1>Hello World</h1> */}

    </>
  )
}

export default App