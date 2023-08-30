const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {getAllGame} = require("../Controllers/getAllGame");
const {getAllGenre} = require ("../Controllers/getAllGenre");
//const routeGenre = require("./routeGenre");
//-------------------------------
const router = Router();
//-------------------------------


router.get('/videogame', getAllGame);
router.get('/genre', getAllGenre);
// router.get()
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
