/* eslint-disable no-console */
const express = require('express');
const routes = require('./routes/index.js');
const db = require('./models/index.js');
const { migrations, seeds } = require('./migrations.js');

const app = express();
routes(app);

async function start() {
  await migrations.up().then(() => {
    console.log('\n -- Migrations complete --\n');
  });
  await seeds.up().then(() => {
    console.log('\n -- Seeds complete --\n');
  });
}

// For the purpose of this job assessment, we will drop and
// re-sync the database each time the application starts.
// For production, sync() would be used with authentication.
db.sequelize.sync({ force: true }).then(() => {
  start();
});

module.exports = app;
