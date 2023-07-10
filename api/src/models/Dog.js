const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,  // Identificador unico universal para garantizar la unicidad de cada id
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, // se utiliza para generar un UUID aleatorio cada vez que se crea un nuevo registro en la tabla.
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
    { freezeTableName: true, timestamps: false }
  );
};

