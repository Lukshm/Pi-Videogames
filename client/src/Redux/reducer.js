import { GET_ALL_GAMES } from "./actionTypes";



const initialState = {
    allGames: [],
}

const reducer = (state = initialState, action) => {
     switch(action.type){
        case GET_ALL_GAMES: {
            return{
                ...state,
                allGames: action.payload
            }
        }

        default:
            return{...state}
     }
}

export default reducer