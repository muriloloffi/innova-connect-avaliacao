/* eslint-disable no-console */
const express = require('express');
const routes = require('./routes/index.js');
const db = require('./models/index.js');
const { migrations, seeds } = require('./migrations.js'); 

const app = express();
routes(app);

// For the purpose of this job assessment, we will drop and
// re-sync the database each time the application starts.
// For production, only sync() is used.
db.sequelize.sync({ force: true }).then(() => {
  migrations.up().then(() => {
    console.log('Migrations complete');
    seeds.up().then(() => {
      console.log('Seeds complete');
    });
  });
});
// start();

module.exports = app;
