require('dotenv').config();
const axios = require('axios');
const URL = 'https://api.rawg.io/api/games/'
const {API_KEY} = process.env;


const getGameById = async (req, res) => {
    
    const {idVideogame} = req.params;

    try{
        const {data} = await axios.get(`${URL}${idVideogame}?key=${API_KEY}`)
        return data ? res.status (200).json(data) : res.status(404).send('Not Found')
    }
     catch (error){
        res.status(500).send(error.message)
        console.log(error);
    }

}

module.exports = {getGameById}