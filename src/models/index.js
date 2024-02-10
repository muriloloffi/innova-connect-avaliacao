const Sequelize = require('sequelize');
const config = require('../../config/db.config.js');
const userModel = require('./user.model.js');
const roleModel = require('./role.model.js');

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: 0,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle,
    },
  },
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = userModel(sequelize, Sequelize);
db.role = roleModel(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: 'user_roles',
});

db.user.belongsToMany(db.role, {
  through: 'user_roles',
});

db.ROLES = ['user', 'admin'];

module.exports = db;
