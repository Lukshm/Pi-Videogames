import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGameById } from '../../Redux/actions';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import '../Detail/Detail.css';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const game = useSelector((state) => state.getGameById);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(setGameById(id));
  }, [id, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Verifica si game.parent_platforms está definido antes de mapearlo
  const platformNames = game.parent_platforms ? game.parent_platforms.map((platform) => platform.platform.name).join(', ') : '';

  return (
    <section className='detail-section'>
      {game.id && (
        <div className='detail-container'>
          <div className='detail-box'>
            <img className='detail-image' src={game.background_image} alt={game.name} />
            <h2>{game.genres && game.genres.map((genre) => genre.name).join(', ')}</h2>
            <div className='titles'>
              <h1>{game.name}</h1>
              <h2>{game.released}, rating: {game.rating}</h2>
            </div>
            <h2>ID: {game.id}</h2>
            <p className='detail-description'>{game.description_raw}</p>
            {/* Mostrar los nombres de las plataformas */}
            <h2>Plataformas: {platformNames}</h2>
          </div>
        </div>
      )}
    </section>
  );
};


export default Detail


