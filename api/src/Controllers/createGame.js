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
        
        genreName.map(async (id)=>{const genreFound = await Genre.findByPk(id) 
            await game.setGenres(genreFound)}) //lo mapeo para recorrerlo y por cada id busca en la bd el genero que concide con el ID y el juego que creo le seteo ese genero
        
        
    }
    return "Juego Creado"
}


module.exports = {createGame}