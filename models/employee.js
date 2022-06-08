const {DataTypes, Model} = require('sequelize');
const connection = require('../db/connection')

class employee extends Model {
  static associate(models) {
      // define association here
    }
  }
  employee.init({
    name: DataTypes.STRING,
    age: DataTypes.NUMBER,
    email: DataTypes.STRING
  }, {
    sequelize: connection,
    modelName: 'employee',
  });

module.exports = employee;