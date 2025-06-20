import React from 'react'
import Welcome from '../Welcome'
import Skills from '../Skills'

const Home = () => {
  return (
    <div>
        <h1> Home page</h1>
        <Welcome name="Mani" country="India"/>
       <Skills skill={['React','Node','Express','MAngoDB']}/>
       <h1>Hello World</h1>
    </div>
  )
}

export default Home