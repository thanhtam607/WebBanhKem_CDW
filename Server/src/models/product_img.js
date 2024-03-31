'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Img extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product_Img.belongsTo(models.Product,{foreignKey:'id_product',as:'ProductData'})
    }
  };
  Product_Img.init({
    id_product: DataTypes.INTEGER,
    img: DataTypes.TEXT,
    status: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product_Img',
  });
  return Product_Img;
};