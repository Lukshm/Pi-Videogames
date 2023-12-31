require('dotenv').config();
const axios = require('axios');
const {Videogame, Genre} = require ('../db')
const URL = 'https://api.rawg.io/api/games/'
const {API_KEY} = process.env;


const getGameById = async (req, res) => {
    
    const {idVideogame} = req.params;  //si viene por param el id
    
    if(Number(idVideogame)){ // el id que entra es string, entonces lo pasamos a number.  Si lo puedo pasar a Number busca la api
        try{
            const {data} = await axios.get(`${URL}${idVideogame}?key=${API_KEY}`)
            if(data){
            const foundGame = {
            ...data,
            img: data.background_image,
            description: data.description_raw,
            releaseDate: data.released,
            platforms: data.parent_platforms.map((platform) => platform.platform.name).join(", "),
            }
            return res.status (200).json(foundGame)  
        }else res.status(404).send('Not Found')
            
    }
         catch (error){
            res.status(500).send(error.message)
        }
    } else{
        try {
            const gameInDb = await Videogame.findOne({where: {id: idVideogame},
            include: {
            model: Genre,
            attributes:['name'],
            through:{
                attributes:[]
            }
            }});
            if (!gameInDb) {
                throw new Error("No esta el juego")
            } else {
                
                res.status(200).json(gameInDb)
            }
        } catch (error) {
            res.status(404).send(error.nessage)
        }
    }
   
}

module.exports = {getGameById}