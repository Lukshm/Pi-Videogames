import { Link } from 'react-router-dom'
import {React} from 'react'
import styles from './NavBar'

const Navbar= () => {
    return (
      <div className={styles.container}>
          <Link to={'/videogames'}>
            <button>Home</button>
          </Link>
          <Link to={'/newVideogame'}>
            <button>Create Game</button>
            </Link>
      </div>
    )
  }

  export default Navbar