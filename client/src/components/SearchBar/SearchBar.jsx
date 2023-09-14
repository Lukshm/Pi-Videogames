import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setGameByName } from '../../Redux/actions';
import styles from './SearchBar.module.css'; 



const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');


  function handleInputChange(event) {
    setName(event.target.value);
  }

  function handleSubmit() {
    dispatch(setGameByName(name));
    setName("");

  }



  return (
    <div className={styles.container}>
      <input
        className={styles.input} 
        type="search"
        placeholder="Buscar..."
        value={name}
        onChange={handleInputChange}
      />
      <button
        className={styles.button}
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
