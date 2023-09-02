const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {getAllGame} = require("../Controllers/getAllGame");
const {getAllGenre} = require ("../Controllers/getAllGenre");
const {getGameById} = require ("../Controllers/getGameById");
const { postGame } = require('../Controllers/postGame');


//-------------------------------
const router = Router();
//-------------------------------


router.get('/videogames', getAllGame);
router.get('/videogames/name?=', getAllGame)
router.get('/genres', getAllGenre);
router.get('/videogames/:idVideogame', getGameById)
router.post('/videogames', postGame)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
