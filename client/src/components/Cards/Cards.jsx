import {React, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setAllGames } from '../../Redux/actions';
import Card from '../Card/Card'

const Cards = () => {
 const dispatch = useDispatch()
 const allGames = useSelector((state) => state.allGames)
 

 useEffect(()=> {
  dispatch(setAllGames())
 },[])

  return (
    <div>
        <h1>Adri se la come</h1>
      {
      allGames.length ? 
      allGames.map((games) => {
      return(
        <Card
        key={games?.id}
        id={games?.id}
        name={games?.name}
        img={games?.img}/>
      )

      })
      : <h1>Loading...</h1>
    }


    </div>
  );
};



export default Cards