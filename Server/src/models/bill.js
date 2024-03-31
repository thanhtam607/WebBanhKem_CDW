'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Bill.init({
     id_user: DataTypes.INTEGER,
     export_date: DataTypes.DATE,
     notes: DataTypes.TEXT,
     pro_bill: DataTypes.FLOAT,
     fee_bill: DataTypes.FLOAT,
     status: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Bill',
  });
  return Bill;
};