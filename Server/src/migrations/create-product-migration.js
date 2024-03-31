'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // viết dùm tối cái này
      // id_type: DataTypes.INTEGER,
      // name: DataTypes.STRING,
      // size: DataTypes.STRING,
      // weight: DataTypes.STRING,
      // description: DataTypes.LONGTEXT,
      // introduction: DataTypes.LONGTEXT,
      // price: DataTypes.FLOAT,
      // status: DataTypes.INTEGER,

      id_type: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.LONGTEXT
      },
      introduction: {
        type: Sequelize.LONGTEXT
      },
      price: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};