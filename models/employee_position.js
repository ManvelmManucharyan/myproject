'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee_position extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employee_position.init({
    employee_id: DataTypes.INTEGER,
    position_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'employee_position',
  });
  return employee_position;
};