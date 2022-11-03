const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns.
    id: {
      type: DataTypes.INTEGER, //Sets datatype to integer
      allowNull: false, //Does not allow null values
      primaryKey: true, //Sets as primary key
      autoIncrement: true //Utilizes auto increment 
    },
    category_name: {
      type: DataTypes.STRING, //Sets datatype to string
      allowNull: false //Does not allow null values
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
