import React from 'react'
import {deleteVideogame} from '../../Utils/apiFunctions'


function Delete({id}) {
  
  
  const handleDelete = () =>{
    deleteVideogame(id)
  }
    
    
    return (
    <div>
    <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Delete