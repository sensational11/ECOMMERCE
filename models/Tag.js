const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, //sets datatype as an integer
      allowNull: false, //Does not allow null values
      primaryKey: true, //Sets as the primary key
      autoIncrement: true //Utilizes auto increments 
    },
    tag_name: {
      type: DataTypes.STRING, //Sets the type as a string 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
