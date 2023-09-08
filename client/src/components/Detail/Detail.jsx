import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGameById } from "../../Redux/actions";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import "../Detail/Detail.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  const game = useSelector((state) => state.getGameById);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(setGameById(id));
    const reset = () => {
      dispatch(setGameById("reset"))
    }
    return reset();
  }, [id, dispatch]);
  
  useEffect(() =>{
    if(game.id){
      setLoader(false);
    }
  },[game])

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
    {loader ? <Loading/> : <section className="detail-section">
    {game.id && (
      <div className="detail-container">
      <div className="detail-box">
      <img className="detail-image" src={game.img} alt={game.name} />
          <h2>
            {game.genres && game.genres.map((genre) => genre.name).join(", ")}
          </h2>
          <div className="titles">
            <h1>{game.name}</h1>
            <h2>
              {game.releaseDate} rating:{game.rating}
            </h2>
          </div>
          <h2>ID: {game.id}</h2>
          <p className="detail-description">{game.description}</p>
          {/* Mostrar los nombres de las plataformas */}
          <h2>Plataformas: {game.platforms}</h2>
        </div>
      </div>
    )}
    </section> }
    </div>
    
  );
};

export default Detail;
