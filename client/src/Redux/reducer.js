import { GET_ALL_GAMES,
        GET_GAME_BY_ID,
        GET_ALL_GENRES,
        GET_BY_NAME,

} from "./actionTypes";



const initialState = {
    allGames: [],
    getGameById: [],
    getAllGenres:[],
    getGamesByName:[],
}

const reducer = (state = initialState, action) => {
     switch(action.type){
        case GET_ALL_GAMES: {
            return{
                ...state,
                allGames: action.payload
            }
        }
        case GET_GAME_BY_ID: {
            return{
                ...state,
                getGameById: action.payload,
            }
        }
        case GET_ALL_GENRES:{
            return {...state,
                getAllGenres: action.payload,
            }
        }

        case GET_BY_NAME:{
            return  {...state,
                getGamesByName: action.payload};
        }

        default:
            return{...state}
     }
}

export default reducer