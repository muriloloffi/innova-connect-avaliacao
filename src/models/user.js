/* eslint-disable strict */

'use strict';

const bcrypt = require('bcryptjs');
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Gym, {
        foreignKey: 'owner_id',
        as: 'gyms',
      });
      User.hasMany(models.Checkin, {
        foreignKey: 'user_id',
        as: 'checkins',
      });
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });

  User.beforeUpdate(async (user, options) => {
    const hashedPassword = await bcrypt.hash(
      user.password,
      await bcrypt.genSalt(8),
    );

    // eslint-disable-next-line no-param-reassign
    user.password = hashedPassword;
  });

  return User;
};
