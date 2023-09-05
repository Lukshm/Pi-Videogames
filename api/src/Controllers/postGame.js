const {createGame} = require ('./createGame')

const postGame = async (req, res) =>{
try{
    const {name, description, releaseDate, rating, platforms, img, genreName} = req.body
    const newGame = await createGame (name, description, releaseDate, rating, platforms, img, genreName)
    res.send(newGame).json
} catch (error){
    console.log(error);
    res.status(400).send({message: error.message})
}
}

module.exports = {postGame}