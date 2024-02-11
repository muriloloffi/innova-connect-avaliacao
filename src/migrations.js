const { Umzug, SequelizeStorage } = require('umzug');
const { sequelize, Sequelize } = require('./models/index.js');

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