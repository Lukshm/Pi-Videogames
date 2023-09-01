require('dotenv').config();

const {centralGame} = require ('./centralGame')
const {getGameById} = require ('./getGameById')


const getAllGame = async (req, res) => {
    
    let vgList = await centralGame();
    const name = req.query.name

    if(name){ //si viene por query 
        let vgName = await vgList.filter(vg => vg.name.toLowerCase().includes(name.toLowerCase()));
        vgName.length ? res.status(200).send(vgName):res.status(404).send('No, justo ese no lo tengo pa')
        console.log(vgList);
    } else{
        res.status(200).send(vgList)
        
        }
    
}

    const gamebyId = async (req, res) => {
    const {id} = req.params
    const source = isNaN(id) ? "db" : "api"
    try{
        const result = await getGameById (id, source)
        if(result.length == 0) throw Error ('Game not found')
        return res.status(200).send(result)
    }catch (error){
        return res.status(400).json
    }
}
module.exports = {getAllGame, gamebyId}