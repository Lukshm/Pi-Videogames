import React from 'react'
import {Link} from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='container'>
    
    <h1 className='title'>Videogame</h1>
    <Link to={`/videogames`}>
    <button className='enter-btn'>Enter</button>
    </Link>
    
    </div>
  )
}

export default LandingPage