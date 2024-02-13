/* eslint-disable strict */

'use strict';

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Gym extends Model {
    static associate(models) {
      Gym.belongsTo(models.User, {
        foreignKey: 'owner_id',
        as: 'owner',
      });
      Gym.hasMany(models.Checkin, {
        foreignKey: 'gym_id',
        as: 'checkins',
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
