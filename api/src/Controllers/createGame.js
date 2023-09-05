const {Videogame, Genre} = require('../db')


const createGame = async (name, description, releaseDate, rating, platforms, img, genreName) =>{
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
        img

    })
    console.log(genreName);

    if(genreName && genreName.length > 0){
        const genres = await Genre.findAll({
            where:{
                name: genreName,
            },
        })
        await game.setGenres(genres)
    }
    return "Listo, esta creado titan!"
}


module.exports = {createGame}