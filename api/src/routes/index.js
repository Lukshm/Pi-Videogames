const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
 


const routeVideogames = require("./routeVideogames");
const routeGenres = require("./RouteGenres");
//-------------------------------
const router = Router();
//-------------------------------


router.use('/videogames', routeVideogames);
router.use('/genres', routeGenres);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
