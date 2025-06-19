import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Welcome from './Welcome'
import Skills from './Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome name='Mani' country='India'/>
      <Skills skill={['React','Node','Express','MAngoDB']}/>
      <h1>Hello</h1>
    </>
  )
}

export default App
