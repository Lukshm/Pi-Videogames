require('dotenv').config();
const axios = require('axios');
const URL = 'https://api.rawg.io/api/games'
const {API_KEY} = process.env;


const getAllGame = async (req, res) => {
    try{
        const {data} = await axios.get(`${URL}?key=${API_KEY}`)
        return data ? res.status (200).json(data) : res.status(404).send('Not Found')
    }
     catch (error){
        res.status(500).send(error.message)
        console.log(error);
    }

}

module.exports = {getAllGame}