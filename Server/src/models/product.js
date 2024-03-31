'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    // INSERT INTO PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS)
    id_type: DataTypes.INTEGER,
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    weight: DataTypes.STRING,
    description: DataTypes.LONGTEXT,
    introduction: DataTypes.LONGTEXT,
    price: DataTypes.FLOAT,
    status: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};