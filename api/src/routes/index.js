const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routeVideogames = require("./routeVideogame");
const routeGenres = require("./routeGenre");
//-------------------------------
const router = Router();
//-------------------------------


router.use('/videogame', routeVideogame);
router.use('/genre', routeGenre);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
