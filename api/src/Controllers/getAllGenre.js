require('dotenv').config();
const axios = require('axios');
const {Genre} = require ('../db')
const { v4: uuidv4 } = require('uuid');
const URL = 'https://api.rawg.io/api/genres'
const {API_KEY} = process.env;



const getAllGenre = async (req, res) => {
    try{
        const apiUrl = await axios.get(`${URL}?key=${API_KEY}`);
        const genreResults = apiUrl.data.results;
        
        genreResults.forEach(async (element) => {
            await Genre.findOrCreate({
                where: {name: element.name}
              });
              
        });

        
        const allGenre = await Genre.findAll();
        
        return res.status(200).json(allGenre);
     
    }
     catch (error){
        res.status(500).send(error.message)
     
    }

}

module.exports = {getAllGenre}