import React from "react";
import style from './Card.module.css';
import { Link } from "react-router-dom";

const Card = ({id, name, img}) =>{
    return(
        
        <div className={style.cardContainer}>
        
        <div className={style.card}>

            <h1 className={style.text}>{name}</h1>
            <Link to = {`/detail/${id}`} >
            <img className='image' src={img}></img>
            </Link>
        </div>
        </div>
    )
}


export default Card