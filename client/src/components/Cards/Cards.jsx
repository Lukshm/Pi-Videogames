import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllGames, setCurrentPage } from '../../Redux/actions';
import Card from '../Card/Card';
import style from './Cards.module.css';
import Loading from '../Loading/Loading';

const Cards = () => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.allGames);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    dispatch(setAllGames()); //dispatch de los games
  }, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGames = allGames.slice(indexOfFirstItem, indexOfLastItem); //paginado


  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage)); // handel del paginado
  };

  return (
    <div className={style.container}>
      
      
      {currentGames.length > 0 ? (
        <div
          className={style.cardsContainer}
          ref={cardsContainerRef}
        >
          {currentGames.map((game) => ( //traigo los games y los recorro con un map para mostrarlos
            <Card
              key={game?.id}
              id={game?.id}
              name={game?.name}
              img={game?.img}
            />
          ))}
        </div>
      ) : (
        <Loading />
      )}

      <div className={style.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)} //boton de p
          disabled={currentPage === 1}
          className={style.paginationBtn}
        >
          Previous
        </button>
        
        <span className={style.pages}>Page {currentPage} / {Math.ceil(allGames.length / itemsPerPage)}</span> 

        <button
          onClick={() => handlePageChange(currentPage + 1)} //boton de next
          disabled={currentGames.length < itemsPerPage}
          className={style.paginationBtnNext}
        >
          Next
        </button>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Cards;
