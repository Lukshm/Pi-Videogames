const { Videogame } = require("../db");

const updateGame = async (req, res) => {
  const { idVideogame } = req.params;
  const { name, description, releaseDate, rating, platforms, img } = req.body;

  try {
    const gameUpdate = await Videogame.findByPk(idVideogame); //reviso si el game existe

    if (!gameUpdate) {
      return res.status(404).json({ message: "No se encontro el juego" });
    }

    await Videogame.update({ //si exsiste le modifico con lo que viene por body
      name,
      description,
      releaseDate,
      rating,
      platforms,
      img,
    },
    {where:{id:idVideogame}}) 

    const vgUpdated = await Videogame.findByPk(idVideogame); //lo vuelvo a llamar modificado

    return res.status(200).json({message:'Juego Actualizado', videogame: vgUpdated});

  } catch (error) {
    res.status(404).send(error.nessage);
  }
};

module.exports = { updateGame };
