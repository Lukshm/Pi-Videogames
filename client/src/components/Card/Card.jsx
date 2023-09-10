import React from "react";
import style from './Card.module.css';
import { Link } from "react-router-dom";

const Card = ({ id, name, img }) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.card}>
       
        <div className={style.imagen}>
          <img className={style.image} src={img} alt={name} />
        </div>
        
        <div className={style.textContainer}>
         
          <Link to={`/detail/${id}`} className={style.link}>
            <h1 className={style.text}>{name}</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
