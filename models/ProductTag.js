const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init({
  // define columns
  id: {
    type: DataTypes.INTEGER, //sets datatype as an integer
    allowNull: false, //Does not allow null values
    primaryKey: true, //Sets the primary key
    autoIncrement: true, //Utilizes Auto Increment 
  },
  product_id: {
    type: DataTypes.INTEGER, //sets datatype as an integer 
    //references the 'Product' model's 'id'
    references: {
      model: "product",
    keys: "id",
    }
  },
  tag_id : {
    type: DataTypes.INTEGER, //sets datatype as an integer 
    //References the tag model's id 
    references: {
      model: "reader",
      key: "id",
    }
  },

  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "product_tag",
});

module.exports = ProductTag;
