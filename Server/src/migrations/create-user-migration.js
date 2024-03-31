'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // viết dùm tối cái này
      email: DataTypes.STRING,
      pass: DataTypes.STRING,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      role: DataTypes.INTEGER,
      status: DataTypes.INTEGER,

      email: {
        type: Sequelize.STRING
      },

      pass: { 
        type: Sequelize.STRING
      },

      name: { 
        type: Sequelize.STRING
      },

      address: {
        type: Sequelize.STRING
      },

      phone: {
        type: Sequelize.STRING
      },

      role: {
        type: Sequelize.INTEGER
      },

      status: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Users');
  }
};