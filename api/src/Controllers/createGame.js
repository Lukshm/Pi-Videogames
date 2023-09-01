const {Videogame} = require('../db')


const createGame = async (name, description, releaseDate, rating, platforms, image) =>{
    const gameCreated = await Videogame.findOne({where: {name}});
    if(gameCreated){
        throw new Error(`Ya fue creado ${name}, wachin`)
    }

    const game = await Videogame.create({
        name,
        description,
        releaseDate,
        rating,
        platforms,
        image

    })
    return "Listo, esta creado titan!"
}


module.exports = {createGame}