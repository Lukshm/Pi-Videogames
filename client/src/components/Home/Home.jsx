import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllGenres, setGameByName, orderCards, setOrder, filterByGenre, gamesOrigin } from '../../Redux/actions';
import SearchBar from '../SearchBar/SearchBar';
import Cards from '../Cards/Cards';
import styles from './Home.module.css'; 


const Home = () => {
  
  
  const dispatch = useDispatch();
  const genreRes= useSelector((state)=> state.getAllGenres);
  const [order, setLocalOrder] = useState('')
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
    dispatch(setFilterGenres(""));
    dispatch(orderCards(""));
    dispatch(setOrder(""));
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
  
   const filterOrigin = (e) => {
    const { value } = e.target;
    dispatch(gamesOrigin(value));
  };

  return (
    <div className={styles.container}>
      <SearchBar />
      <div className={styles.selectors}>
        <select value={order} onChange={handleSort}>
          {['Select order', 'A-Z', 'Z-A', 'Best rated', 'Least rated'].map((order, index) => (
            <option key={index} value={order}>
              {order}
            </option>
          ))}
        </select>

        <select onChange={handleFilterGenres} value={filterGenres}>
          <option value="AllGenres">Genres</option>
          {genreRes.map((genre, index) => (
            <option key={index} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
  
        <select name="Origin" onChange={filterOrigin}>
            <optgroup label="Origin">
              <option value="api">API</option>
              <option value="db">DB</option>
            </optgroup>
          </select>
        <button onClick={handleReset}>Reset Filter</button>
      </div>
  
      <Cards />
    </div>
  );
};
  
  
  
  
  

export default Home