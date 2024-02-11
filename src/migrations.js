const { Umzug, SequelizeStorage } = require('umzug');
const { sequelize } = require('./models/index.js');

const migrationsConfig = {
  migrations: {
    glob: 'src/migrations/*.js',
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
};

// Build the seedConfig object; Follow the example on https://github.com/sequelize/umzug/issues/24,
// but adapt it to the version 3 of Umzug like the example above.
const seedConfig = {
  migrations: {
    glob: 'src/seeders/*.js',
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  modelName: 'SequelizeData',
  logger: console,
};

const migrations = new Umzug(migrationsConfig);
const seeds = new Umzug(seedConfig);

module.exports = {
  migrations,
  seeds,
};
