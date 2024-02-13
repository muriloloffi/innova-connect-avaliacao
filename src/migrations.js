const { Umzug, SequelizeStorage } = require('umzug');
const { sequelize } = require('./models/index.js');

const migrationsConfig = {
  migrations: {
    glob: 'src/migrations/*.js',
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({
    sequelize,
    modelName: sequelize.options.migrationStorageTableName,
  }),
  logger: console,
};

// Here, I Build the seedConfig object; Following the example on
// https://github.com/sequelize/umzug/issues/24, but adapting it
// to the ver. 3 of Umzug like the example above. This automati-
// cally seeds some default admin users into the database.
const seedConfig = {
  migrations: {
    glob: 'src/seeders/*.js',
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({
    sequelize,
    modelName: sequelize.options.seederStorageTableName,
  }),
  logger: console,
};

const migrations = new Umzug(migrationsConfig);
const seeds = new Umzug(seedConfig);

module.exports = {
  migrations,
  seeds,
};
