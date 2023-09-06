import {React, useEffect, useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setAllGenres, setGameByName } from '../../Redux/actions'
import { getGamesByName } from '../../Utils/apiFunctions'

const SearchBar = () => {

  const dispatch = useDispatch();
  const genreRes= useSelector((state)=> state.getAllGenres);
  const [name, setName] = useState('');

  useEffect(()=>{
    dispatch(setAllGenres())
  },[]);

  function handleInputChange(event){
    setGameByName(event.target.value);
    setName(event.target.value);
  }
  function handleSubmit(){
    dispatch(getGamesByName(name));
  }

  return (
    <div>

    <Link to={'/NewVideogame'}>
    <button>Crate Game</button>
    </Link>

    <input type='search'
    placeholder='Buscar...'
    value={name}
    onChange={handleInputChange}>
    </input>
    <Link to='/name'>
    <button onClick={handleSubmit}>Search</button>
    </Link>
    <select>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
    </select>
    <select>
        <option value="API">API</option>
        <option value="DB">Created</option>
    </select>
    <select>
       { genreRes.map((genre,index) => {
          return(
              <option key={index} id={index} value="Genres">{genre.name}</option>
          )
        })}
        </select>
    </div>
  )
}

export default SearchBar