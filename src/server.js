const express = require('express');
const routes = require('./routes/index.js');
const db = require('./models/index.js');

const app = express();
routes(app);

// For the purpose of this job assessment, we will drop and
// re-sync the database each time the application starts.
// For production, only sync() is used.
db.sequelize.sync({ force: true }).then(() => {
  // eslint-disable-next-line no-console
  console.log('Drop and re-sync db.');
});

module.exports = app;
