import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGameById} from "../../Redux/actions";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import styles from "../Detail/Detail.module.css";
import Delete from "../Delete/Delete"

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  const game = useSelector((state) => state.getGameById);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(setGameById(id));
    const reset = () => {
      dispatch(setGameById("reset"));
    };
    return reset();
  }, [id, dispatch]);

  useEffect(() => {
    if (game.id) {
      setLoader(false);
    }
  }, [game]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(game);
  return (
    <div>
      {loader ? (
        <div className={styles.loading}><Loading /></div>
      ) : (
        <section className={styles["detail-section"]}>
          {game.id && (
            <div className={styles["detail-container"]}>
              <div className={styles["detail-box"]}>
                <img
                  className={styles["detail-image"]}
                  src={game.img}
                  alt={game.name}
                />
               
                <div className={styles["titles"]}>
                  <h1>{game.name}</h1>
                  <h2>
                  {game.genres ?
                    game.genres.map((genre) => genre.name).join(", "): game.Genres.map((genre) => genre.name).join(", ")}
                  </h2>
                  <h2>
                    Released on: {game.releaseDate} 
                  </h2>
                    <h2>rating: {game.rating}</h2>
                </div>
                <h2>ID: {game.id}</h2>
                <p className={styles["detail-description"]}>
                  {game.description}
                </p>

                <h2>Plataformas: {game.platforms}</h2>
                
                {!Number(game.id)&&
                  <Delete id={game.id}/>
                }
                
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default Detail;
