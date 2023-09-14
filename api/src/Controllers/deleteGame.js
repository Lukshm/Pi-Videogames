const {Videogame} = require ('../db')

const deleteGame = async (req, res) =>{
   
    const {idVideogame} = req.params;

    try {

       await Videogame.destroy({where: {id: idVideogame}})
       
    
       return res.status(200).json("Juego Destruido")
        
    } catch (error) {
        res.status(404).send(error.nessage)
    }
}
module.exports = {deleteGame}