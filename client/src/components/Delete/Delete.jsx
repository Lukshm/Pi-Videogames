import React from 'react'
import {deleteVideogame} from '../../Utils/apiFunctions'
import { useNavigate } from 'react-router-dom'
import styles from './Delete.module.css'


function Delete({id}) {
  
  const navigate = useNavigate();
  const handleDelete = () =>{
    deleteVideogame(id)
    navigate('/videogames')
  }
    
    
    return (
    <div>
    <button className={styles.delbtn} onClick={handleDelete}>Borrar</button>
    </div>
  )
}

export default Delete