import {React,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setGameById } from '../../Redux/actions'
import {useParams} from 'react-router-dom'



const Detail = () => {
  
  
  const dispatch = useDispatch();
  const idResp = useSelector((state)=> state.getGameById)
  const{id} = useParams();
  
  useEffect(() =>{
    dispatch(setGameById(id))
  },[])
  
  
    return (
        <section className='detail-section'>
        {
          idResp.id ?
         <div className='detail-container'>
          <div className='detail-box'>
  
          <img className='detail-image' src={idResp.background_image}></img>
  
  
          <h2>{idResp.genres.name}</h2>
  
  
          <h1>{idResp.name}</h1> 
          <h2>{idResp.released}, rating: {idResp.rating} </h2>
  
  
          <p className='detail-description'>{idResp.description_raw}</p>
  
          </div>
        </div>
          : <h1>Loading...</h1> //Crear componente loading
        }
      </section>

        )
}


export default Detail


