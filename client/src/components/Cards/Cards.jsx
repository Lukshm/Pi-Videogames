import {React, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setAllGames } from '../../Redux/actions';
import Card from '../Card/Card'
import style from './Cards.module.css';


const Cards = () => {
 const dispatch = useDispatch() // es lo que usa el action  
 const allGames = useSelector((state) => state.allGames) //trae y usa del estado global
 

 useEffect(()=> {
  dispatch(setAllGames())
 },[]) // maneja el ciclo de vida del componente

  return (
    <div className={style.div}>
        
      {
      allGames?.length ? 
      allGames?.map((games, index) => {
      return(
        <Card
        key={games?.id}
        id={games?.id}
        name={games?.name}
        img={games?.img}/>
      )

      })
      : <h1>No exsiste el Juego</h1>
    }


    </div>
  );
};



export default Cards