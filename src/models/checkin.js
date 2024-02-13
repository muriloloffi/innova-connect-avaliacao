/* eslint-disable strict */

'use strict';

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Checkin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method
     * automatically.
     */
    static associate(models) {
      Checkin.hasOne(models.User, {
        foreignKey: 'user_id',
        as: 'user',
      });
      Checkin.hasOne(models.Gym, {
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
