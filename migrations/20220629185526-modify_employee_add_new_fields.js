'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
          'employees', // table name
          'password', // new field name
          {
            type: Sequelize.STRING,
            allowNull: false,
            after: "email"
          },
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('employees', "password"),
    ]);
  },
};