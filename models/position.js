'use strict';
const {Model, DataTypes} = require('sequelize');
const connection = require('../db/connection')
class position extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  position.init({
    position: DataTypes.STRING,
    salary: DataTypes.INTEGER
  }, {
    sequelize: connection,
    modelName: 'position',
  });

module.exports = position;