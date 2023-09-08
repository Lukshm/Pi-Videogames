const {Videogame, Genre} = require('../db')


const createGame = async (name, description, releaseDate, rating, platforms, img, genreName) =>{
    const gameCreated = await Videogame.findOne({where: {name}});
    if(gameCreated){
        throw new Error(`Ya fue creado ${name}`)
    }

    const game = await Videogame.create({
        name,
        description,
        releaseDate,
        rating,
        platforms,
        img

    })
    

    if(genreName && genreName.length > 0){
        const genres = await Genre.findAll({
            where:{
                name: genreName,
            },
        })
        await game.setGenres(genres)
    }
    return "Juego Creado"
}


module.exports = {createGame}