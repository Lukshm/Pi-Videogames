const {Videogame, Genre} = require ('../db')

const getDbData = async () => {
    const dbData = await Videogame.findAll({
        include: {
            model :Genre,
            attribute: ["name"], 
            through:{
                attributes:[]
            }
        }
    });
    
    return  dbData;
}

module.exports = {getDbData};