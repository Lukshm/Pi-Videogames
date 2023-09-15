import {React,  useState } from 'react'
import {deleteVideogame} from '../../Utils/apiFunctions'
import { useNavigate} from 'react-router-dom'
import styles from './Delete.module.css'
import Modal from '../Modal/Modal'


function Delete({id}) {
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate();
  const handleDelete = () =>{
    deleteVideogame(id)
    setOpenModal(true)
  }
    
    
    return (
    <div>
    <button  className={styles.delbtn} onClick={handleDelete}>Borrar</button>
    <Modal open={openModal} onClose={()=> {setOpenModal(false)
        navigate('/videogames')}} />
    </div>
  )
}

export default Delete