// import important parts of sequelize library
const { Model, DataTypes, DECIMAL } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init({
  // define columns
  id: {
    type: DataTypes.INTEGER, //sets datatype to integer
    allowNull: false, //Does not allow null values
    primaryKey: true, //Sets primary key
    autoIncrement: true, //Utilizes auto increment 
  },
  product_name: {
    type: DataTypes.STRING, //sets datatype to integer
    allowNull: false, //Does allow null values 
  },

  price: {
    type: DataTypes.DECIMAL, //sets datatype to decimal 
    allowNull: false, //Does not allow null values
    validate: DECIMAL, //validates that the value is a decimal double check this 
  },
  stock: {
    type: DataTypes.INTEGER, //sets datatype to integer
    allowNull: false, //Does not allow null values
    defaultValue: 10, //set a default value of '10'
    validate: Number, //validates that the value is numeric. 
  },
  category_id: {
    type: DataTypes.INTEGER, //sets datatype to integer 
    //References the 'Category' model's 'id'. 

  },

  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "product",
});

module.exports = Product;
