import {
  GET_ALL_GAMES,
  GET_GAME_BY_ID,
  GET_ALL_GENRES,
  GET_BY_NAME,
  ALPHABETICAL_ORDER,
  FILTERED_GENRES,
  POST_GAME,
  SET_CURRENT_PAGE
} from "./actionTypes";

const initialState = {
  allGames: [], //carga desde el principio
  allGamesCopy: [], // copia del all games para el filtrado
  getGameById: [],
  getAllGenres: [],
  getGamesByName: [],
  videogames: [],
  currentPage: 1,
  itemsPerPage: 15,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GAMES: {
      return {
        ...state,
        allGames: action.payload,
        allGamesCopy: action.payload,
      };
    }
    case GET_GAME_BY_ID: {
      return {
        ...state,
        getGameById: action.payload,
      };
    }
    case GET_ALL_GENRES: {
      return { ...state, getAllGenres: action.payload, details: {} };
    }

    case GET_BY_NAME: {
      return { ...state, allGames: action.payload };
    }
    case ALPHABETICAL_ORDER: {
      let orderArray = [...state.allGames];

      if (action.payload === "A-Z") {
        orderArray.sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        );
        // se podria cambiar y hacer por nombre, el 1 y -1 indican si es verdadero lo deja primero sino lo pone delante con el -1.
      } else if (action.payload === "Z-A") {
        orderArray.sort((a, b) =>
          b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1
        );
      } else if (action.payload === "Best rated") {
        orderArray.sort((a, b) => (b.rating > a.rating ? 1 : -1));
      } else if (action.payload === "Least rated") {
        orderArray.sort((a, b) => (a.rating > b.rating ? 1 : -1));
      }
      return {
        ...state,
        allGames: orderArray,
      };
    }
    case FILTERED_GENRES: {
      const filteredArr = state.allGamesCopy.filter((elem) =>
        elem.genres?.includes(action.payload)
      );
      return {
        ...state,
        allGames: filteredArr,
      };
    }

    case POST_GAME:
      return {
        ...state,
        videogames: [...state.videogames, action.payload],
      };

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;
