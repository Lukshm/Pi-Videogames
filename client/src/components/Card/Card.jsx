import React from "react";

import { Link } from "react-router-dom";

const Card = ({id, name, img}) =>{
    return(
        <div>
            <h1>{name}</h1>
            <Link to = '/detail'>
            <img className='image' src={img}></img>
            </Link>
        </div>
    )
}


export default Card