const {Videogame, Genre} = require ('../db')

const getDataDb = async () => {
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

module.exports = getDataDb;