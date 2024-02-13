/* eslint-disable strict */

'use strict';

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Gym extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method
     * automatically.
     */
    static associate(models) {
      Gym.hasOne(models.User, {
        foreignKey: 'UserId',
        as: 'owner',
      });
    }
  }
  Gym.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    phone: DataTypes.STRING,
    coordinates: DataTypes.GEOMETRY('POINT'),
  }, {
    sequelize,
    modelName: 'Gym',
    tableName: 'gyms',
  });
  return Gym;
};
