const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
const db = require('./models/index.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(
  cookieSession({
    name: 'session',
    secret: 'INNOVA-CONNECT-TEST-SECRET-KEY',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  }),
);

// For the purpose of this job assessment, we will drop and
// re-sync the database each time the application starts.
// For production, only sync() is used.
db.sequelize.sync({ force: true }).then(() => {
  // eslint-disable-next-line no-console
  console.log('Drop and re-sync db.');
});

app.get('/', cors(), (req, res) => {
  res.status(200).json({ data: { message: 'User data' } });
});

module.exports = app;
