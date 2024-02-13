const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
const users = require('./usersRoutes.js');
const gyms = require('./gymsRoutes.js');

module.exports = (app) => {
  app.use(
    express.json(),
    users,
    gyms,
  );
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
};
