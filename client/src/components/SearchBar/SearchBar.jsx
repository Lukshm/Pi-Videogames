import React from 'react'
import { Link } from 'react-router-dom'

const SearchBar = () => {
  return (
    <div>

    <Link to={'/NewVideogame'}>
    <button>Crate Game</button>
    </Link>

    <input type='search'></input>
    <button>Search</button>

    <select>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
    </select>
    <select>
        <option value="API">API</option>
        <option value="DB">Created</option>
    </select>
    </div>
  )
}

export default SearchBar