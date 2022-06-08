'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
          'employees', // table name
          'email', // new field name
          {
            type: Sequelize.STRING,
            allowNull: true,
              after: "age"
          },
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('employees', "email"),
    ]);
  },
};