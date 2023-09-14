import { React, useState } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Home from "./components/Home/Home"
import FormPage from './components/NewVideogame/NewVideogame'
import Detail from './components/Detail/Detail'
import Navbar from './components/NavBar/NavBar'
import Update from './components/UpdateVideogame/UpdateVideogame'
import './App.css';


function App() {

    const location = useLocation();

  return (
   
      <div>
        {location.pathname !== '/' && (<Navbar/>)}
       <Routes>
        <Route path='/' element = {<LandingPage/>} />
        <Route path='/videogames' element={<Home/>}/>
        <Route path='/newVideogame' element={<FormPage/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/detail/update/:id' element={<Update/>}/>
       </Routes>
      </div>
   
  )
}

export default App
