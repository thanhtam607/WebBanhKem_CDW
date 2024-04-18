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
      Product.hasMany(models.Product_Img,{foreignKey:'id_product',as:'productImageData'})
      Product.hasMany(models.Comment,{foreignKey:'id_product',as:'CommentImageData'})
      Product.hasMany(models.Cart,{foreignKey:'id_product',as:'cartData'})
      Product.hasMany(models.Bill_Detail,{foreignKey:'id_product',as:'BillDetailData'})
      Product.belongsTo(models.Discount,{foreignKey:'id_product',as:'discountImageData'})
      Product.belongsTo(models.Category,{foreignKey:'id_type',as:'categoryData'})
    }
  };
  Product.init({
    // INSERT INTO PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS)
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Đây là khóa chính
      autoIncrement: true // Đây là một khóa tự động tăng
    },
    id_type: DataTypes.INTEGER,
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    introduction: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    status: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};