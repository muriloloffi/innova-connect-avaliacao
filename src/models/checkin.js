/* eslint-disable strict */

'use strict';

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Checkin extends Model {
    static associate(models) {
      Checkin.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
      });
      Checkin.belongsTo(models.Gym, {
        foreignKey: 'gym_id',
        as: 'gym',
      });
    }
  }
  Checkin.init({
  }, {
    sequelize,
    modelName: 'Checkin',
    tableName: 'checkins',
  });
  return Checkin;
};
