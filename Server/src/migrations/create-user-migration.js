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