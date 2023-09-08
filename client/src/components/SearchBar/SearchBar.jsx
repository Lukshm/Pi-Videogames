import {React, useState} from 'react'
import {useDispatch } from 'react-redux'

import {setGameByName } from '../../Redux/actions'


const SearchBar = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  

  function handleInputChange(event){
    setGameByName(event.target.value);
    setName(event.target.value);
  }
  function handleSubmit(){
    dispatch(setGameByName(name));
  }
  
  return (
    <div>

    
    <input type='search'
    placeholder='Buscar...'
    value={name}
    onChange={handleInputChange}>
    </input>
    <button onClick={handleSubmit}>Search</button>
    
    </div>
  )
}

export default SearchBar