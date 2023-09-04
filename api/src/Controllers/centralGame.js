require("dotenv").config();
const {getApiData} = require('./getApiData')
const {getDbData} = require ('./getDbData');


//centraliza la informacion de entre la api y la base de datos
const centralGame = async () => {
    const apiData = await getApiData();
    const dbData = await getDbData();
    const totalData = [...apiData, ...dbData] // concatena DB y API
    return totalData;
}

module.exports = {centralGame};