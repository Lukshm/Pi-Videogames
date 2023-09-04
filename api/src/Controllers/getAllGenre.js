require('dotenv').config();
const axios = require('axios');
const {Genre} = require ('../db')

const URL = 'https://api.rawg.io/api/genres'
const {API_KEY} = process.env;



const getAllGenre = async (req, res) => {
    try{
        const apiUrl = await axios.get(`${URL}?key=${API_KEY}`); //hace la peticion a los generos de la api
        const genreResults = apiUrl.data.results; 
        
        genreResults.forEach(async (element) => { // aca los chequea si estan y si no estan los crea
            await Genre.findOrCreate({
                where: {name: element.name}
              });
              
        });

        
        const allGenre = await Genre.findAll(); //los trae para mostrarlos
        
        return res.status(200).json(allGenre);
     
    }
     catch (error){
        res.status(500).send(error.message)
     
    }

}

module.exports = {getAllGenre}