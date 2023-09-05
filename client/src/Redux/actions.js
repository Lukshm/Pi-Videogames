import { getAllGames } from "../Utils/apiFunctions";
import { GET_ALL_GAMES } from "./actionTypes";

export const setAllGames = () => {
    return async (dispatch) => {
        console.log("no entiendo un carajo");
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