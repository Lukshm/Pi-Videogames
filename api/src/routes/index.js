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


router.get('/videogames/name?=', getAllGame)
router.get('/videogames/:idVideogame', getGameById)
router.get('/genres', getAllGenre);
router.post('/videogames', postGame)
router.get('/videogames', getAllGame);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
