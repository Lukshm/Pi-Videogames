import {React, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setAllGames, setCurrentPage } from '../../Redux/actions';
import Card from '../Card/Card'
import style from './Cards.module.css';
import Loading from '../Loading/Loading';


const Cards = () => {
 const dispatch = useDispatch() // es lo que usa el action  
 const allGames = useSelector((state) => state.allGames) //trae y usa del estado global
 const currentPage = useSelector((state) => state.currentPage);
 const itemsPerPage = useSelector((state) => state.itemsPerPage);

 useEffect(()=> {
  dispatch(setAllGames())
 },[dispatch]) // maneja el ciclo de vida del componente
 



 //calcula el rango de la pag actual
 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentGames = allGames.slice(indexOfFirstItem, indexOfLastItem);
  
 const handlePageChange = (newPage) => {
  dispatch(setCurrentPage(newPage));
};
 
return (
  <div className={style.containertwo}>
    {currentGames.length > 0 ? (
      currentGames.map((game) => (
        <Card
          key={game?.id}
          id={game?.id}
          name={game?.name}
          img={game?.img}
        />
      ))
    ) : (
      <Loading />
    )}

    <div className={style.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={style.paginationbtn}
      >
        Previous
      </button>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentGames.length < itemsPerPage}
        className={style.paginationbtn}
      >
        Next
      </button>
    </div>
  </div>
);
};

















//  return (
//     <div className={style.div}>
        
//       {
//       allGames?.length ? 
//       allGames?.map((games, index) => {
//       return(
//         <Card
//         key={games?.id}
//         id={games?.id}
//         name={games?.name}
//         img={games?.img}/>
//       )

//       })
//       : <h1>Pera que esta cargando amigo...</h1>
//     }


//     </div>
//   );




export default Cards