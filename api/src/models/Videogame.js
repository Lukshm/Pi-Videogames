const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    releaseDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    createDB: {  //sirve para distinguir entre videojuegos de la api y bd
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
  
  });
};

