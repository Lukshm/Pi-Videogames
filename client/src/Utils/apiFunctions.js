import axios from "axios";

export const getAllGames = async () => {
  try {
    let response = await axios.get("http://localhost:3001/videogames");
    return response.data;
  } catch (error) {
    console.log("no se encontraron juegos");
  }
};
export const getGamesById = async (id) => {
  try {
    let response = await axios.get(`http://localhost:3001/videogames/${id}`);
    return response.data;
  } catch (error) {
    console.log("no se encontraron juegos");
  }
};

export const getAllGenres = async () => {
  try {
    let response = await axios.get("http://localhost:3001/genres");
    return response.data;
  } catch (error) {
    console.log("no se encontraron generos");
  }
};

export const getGamesByName = async (name) => {
  try {
    let response = await axios.get(
      `http://localhost:3001/videogames?name=${name}`
    );
    return response.data;
  } catch (error) {
    console.log("no se encontraron juegos");
  }
};

export const postVideogame = async () => {
  try {
    await axios.post("http://localhost:3001/videogames");
  } catch (error) {
    console.log("juego no creado");
  }
};