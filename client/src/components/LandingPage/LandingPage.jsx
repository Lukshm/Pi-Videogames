import React from 'react'
import {Link} from 'react-router-dom'
import styles from './LandingPage.module.css'

const LandingPage = () => {
  return (
    
   
    
    <div className={styles.container}>
    <div className={styles.videogamesBackground}>
    <br></br>
    <br/>
    <br/>
    <h1 className={styles.title}></h1>
    <Link to={`/videogames`}>
    <button className='enter-btn'>Enter</button>
    </Link>
    </div>
    </div>
  )
}

export default LandingPage