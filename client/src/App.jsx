import { React, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Home from "./components/Home/Home"
import FormPage from './components/NewVideogame/NewVideogame'
import Detail from './components/Detail/Detail'
import './App.css';


function App() {
  

  return (
   
      <div>
       <Routes>
        <Route path='/' element = {<LandingPage/>} />
        <Route path='/videogames' element={<Home/>}/>
        <Route path='/newVideogame' element={<FormPage/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
       </Routes>
      </div>
   
  )
}

export default App
