// import important parts of sequelize library
const { Model, DataTypes, DECIMAL } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");
const Category = require("./Category");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, //sets datatype to integer
      allowNull: false, //Does not allow null values
      primaryKey: true, //Sets primary key
      autoIncrement: true, //Utilizes auto increment
    },
    product_name: {
      type: DataTypes.STRING, //sets datatype to string
      allowNull: false, //Does allow null values
    },

    price: {
      type: DataTypes.DECIMAL, //sets datatype to decimal
      allowNull: false, //Does not allow null values
      validate: {
        //validates that the value is a decimal double check this
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER, //sets datatype to integer
      allowNull: false, //Does not allow null values
      defaultValue: 10, //set a default value of '10'
      validate: {
        //validates that the value is numeric.
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER, //sets datatype to integer

      reference: {
        //References the 'Category' model's 'id'.
        model: "category",
        key: "id",
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
