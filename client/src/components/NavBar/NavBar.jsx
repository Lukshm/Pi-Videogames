import { Link } from 'react-router-dom'
import { React } from 'react'
import styles from './NavBar.module.css'; // Asegúrate de importar el archivo CSS

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link to={'/videogames'}>
        <button>Home</button>
      </Link>
      <Link to={'/newVideogame'}>
        <button>Create Game</button>
      </Link>
      <Link to={'/about'}>
        <button>About Me</button>
      </Link>
    </div>
  )
}

export default Navbar
