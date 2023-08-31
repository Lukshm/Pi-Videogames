require('dotenv').config();
const axios = require('axios');
const URL = 'https://api.rawg.io/api/games'
const {API_KEY} = process.env;


const getApiData = async ()=> {
    
    const importGames = [];

    for (let i = 1; i<=5; i++) {
        let api = await axios.get(`${URL}?key=${API_KEY}&page=${i}`)
        api.data.results.map(viGame =>{
            importGames.push({
                id: viGame.id,
                name: viGame.name,
                img: viGame.background_image,
                genres: viGame.genres.map(viGame => viGame.name).join(', '),
                released: viGame.released,
                rating: viGame.rating,
                platform: viGame.platforms.map((viGame) => viGame.platform.name).join(', ')

            })
        })
    }
  
    return importGames;
}
    
    
    



module.exports = getApiData;