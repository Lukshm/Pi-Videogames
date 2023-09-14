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
    alert("no se encontraron juegos");
    return await getAllGames();
  }
};

export const postVideogame = async (form) => {
  try {
    await axios.post("http://localhost:3001/videogames", form);
  } catch (error) {
    console.log("juego no creado");
  }
};

export const deleteVideogame = async (id) => {
  try {
    await axios.delete(`http://localhost:3001/videogames/${id}`);
    alert("El juego se ha borrado con exito :(")
  } catch (error) {
    alert("No se pudo borrar el juego :)");
  }
};

export const updateVideogame = async (form, id) => {
  try {
    await axios.put(`http://localhost:3001/videogames/${id}`, form);
    alert("El juego se ha modificado con exito :)")
  } catch (error) {
    alert("No se pudo modificar el juego :(");
  }
};
