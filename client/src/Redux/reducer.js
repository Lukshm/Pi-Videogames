import {
  GET_ALL_GAMES,
  GET_GAME_BY_ID,
  GET_ALL_GENRES,
  GET_BY_NAME,
  ALPHABETICAL_ORDER,
  FILTERED_GENRES,
  POST_GAME,
  SET_CURRENT_PAGE,
  GAMES_ORIGIN,
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
  filterChose: {
    genreOne: "select Genre One",
    genreTwo: "select Genre Two",
  },
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
      const { genreOne, genreTwo } = action.payload;
      let filtered = [...state.allGamesCopy];
  
      if (genreOne !== "select Genre One") {
        filtered = filtered.filter((game) => game.genres?.includes(genreOne));
      }

      if (genreTwo !== "select Genre Two" && genreTwo !== "") {
        filtered = filtered.filter((game) => game.genres?.includes(genreTwo));
      }

      return {
        ...state,
        filterChosen: action.payload,
        allGames: filtered,
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

    case GAMES_ORIGIN: {
      let originGames = [...state.allGamesCopy];
      if (action.payload === "All") {
        return {
          ...state,
          allGames: [...state.allGamesCopy],
        };
      }
      if (action.payload === "api") {
        const apiGames = originGames.filter((game) =>
          Number.isInteger(game.id)
        );
        console.log(apiGames);

        return {
          ...state,
          allGames: apiGames,
        };
      }

      if (action.payload === "db") {
        const uuidv4Pattern =
          /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

        const dbGames = originGames.filter((game) =>
          uuidv4Pattern.test(game.id)
        );
        console.log(dbGames);

        return {
          ...state,
          allGames: dbGames,
        };
      }
    }
    default:
      return { ...state };
  }
};

export default reducer;
