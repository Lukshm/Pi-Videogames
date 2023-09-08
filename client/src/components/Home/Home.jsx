import {React, useEffect, useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { setAllGenres, setGameByName, orderCards,setOrder,  filterByGenre } from '../../Redux/actions'
import SearchBar from '../SearchBar/SearchBar'
import Cards from '../Cards/Cards'


const Home = () => {
  
  
  const dispatch = useDispatch();
  const genreRes= useSelector((state)=> state.getAllGenres);
  const [order, setLocalOrder] = useState('')
  const [aux, setAux] = useState(false);
  const [filterGenres, setFilterGenres] = useState('')
  const orderChosen = useSelector((state) => state.allGames)
  
  useEffect(()=>{
    dispatch(setAllGenres())
    dispatch(setOrder(orderChosen))
    
  },[]);
  
  useEffect(() => {
    setLocalOrder(orderChosen)
  
   },[orderChosen])

  const handleReset = ()=> {
    dispatch(setGameByName(''));
  }
  const handleSort = (e) =>{
    let selector = e.target.value;
    setLocalOrder(selector)
    dispatch(setOrder(selector))
  
   }
   const handleFilterGenres = (e) => {
    setFilterGenres(e.target.value)
    dispatch(filterByGenre(e.target.value))
   
   }
  
   const handleOrder = (event)=>{
    dispatch(orderCards(event.target.value));
    setAux(!aux)
  };
  return (
    <div>

        <SearchBar/>
        <select value={order} onChange={handleSort}>
        {['Select order', 'A-Z', 'Z-A', 'Best rated', 'Least rated'].map((order, index) => 
          (<option key={index} value={order}>{order}</option>)
        )}
      </select>

      
      <select onChange={handleOrder}>
      <option value="A">Ascendente</option>
      <option value="D">Desendente</option>
      </select>
      
      <select onChange={handleFilterGenres} value={filterGenres}>
       <option value='AllGenres'>Genres</option>
       { genreRes.map((genre, index) => {
          return(
              <option key={index} value={genre.name}>{genre.name}</option>
          )
        })}
        </select>
        
        <button onClick={handleReset}>Reset Filter</button>
        

        <select>
        <option value="API">API</option>
        <option value="BD">Created</option>
        </select>
        <Cards/>
    </div>
  )
}

export default Home