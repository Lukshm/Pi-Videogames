require('dotenv').config();

const {centralGame} = require ('./centralGame')



const getAllGame = async (req, res) => {
    
    let vgList = await centralGame();
    const name = req.query.name

    if(name){ //si viene por query 
        let vgName = vgList.filter(vg => vg.name.toLowerCase().includes(name.toLowerCase()));
        vgName.length ? res.status(200).send(vgName):res.status(404).send(`El juego ${name} no se encuentra`)
    
    } else{
        res.status(200).send(vgList)
        
        }
    
}

   
module.exports = {getAllGame}