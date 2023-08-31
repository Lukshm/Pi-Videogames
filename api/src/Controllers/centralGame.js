require("dotenv").config();
const getApiData = require('./getApiData')
const getDbData = require ('./getDbData');

const centralGame = async () => {
    const apiData = await getApiData();
    const dbData = await getDbData();
    const totalData = dbData.concat(apiData);
    return totalData;
}

module.exports = centralGame;