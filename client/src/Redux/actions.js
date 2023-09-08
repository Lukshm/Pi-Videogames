import { getAllGames, getGamesById, getAllGenres, getGamesByName, postVideogame } from "../Utils/apiFunctions";
import { GET_ALL_GAMES, 
            GET_GAME_BY_ID, 
            GET_ALL_GENRES, 
            GET_BY_NAME,
            ALPHABETICAL_ORDER, 
            FILTERED_ORDER, 
            GET_API_OR_BD,
            FILTERED_GENRES,
            POST_GAME } from "./actionTypes";

export const setAllGames = () => {
    return async (dispatch) => {
        try {
            const games = await getAllGames();

            return dispatch({
                type: GET_ALL_GAMES,
                payload: games,
            })
        } catch (error) {
            console.log('server error!');
        }
    };
};

export const setGameById = (id) => {
    return async (dispatch) => {
        try {
            const games = await getGamesById(id);
            console.log(games);
            return dispatch({
                type: GET_GAME_BY_ID,
                payload: games,
            })
        } catch (error) {
            console.log('server error!');
        }
    };
};

export const setAllGenres = () => {
    return async (dispatch) => {
        try {
            const genres = await getAllGenres();

            return dispatch({
                type: GET_ALL_GENRES,
                payload: genres,
            })
        } catch (error) {
            console.log('server error!');
        }
    };
};

export const setGameByName = (name) => {
    return async (dispatch) =>{
        try {
            const names = await getGamesByName(name);
        
            return dispatch({
                type: GET_BY_NAME,
                payload: names,
            })
        } catch (error) {
            console.log('server error!');
        }
    };
};

export const setOrder = (order) => {
    return{
      type: ALPHABETICAL_ORDER,
      payload: order,
    }      
};

export const orderCards = (order) => {
return {
    type: FILTERED_ORDER,
    payload: order}
}

export const getGamesByOrigin = (payload) => {
return {
    type: GET_API_OR_BD,
    payload
}

}

export const filterByGenre = (genres) => {
 
    return {
        type: FILTERED_GENRES,
        payload: genres
    }
}

export const postGame = (form) => {
    return {
            type: POST_GAME,
            payload: form
        }
    
}