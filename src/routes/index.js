/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis').default;
const users = require('./usersRoutes.js');
const gyms = require('./gymsRoutes.js');
const auth = require('./authRoutes.js');

const redisClient = redis.createClient({
  url: 'redis://redis:6379',
});
redisClient.connect().catch(console.error);

const redisStore = new RedisStore({ client: redisClient });

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    users,
    gyms,
    auth,
  );
  app.use(cors({ origin: 'http://localhost:5173' }));
  app.use(
    session({
      store: redisStore,
      secret: 'INNOVA-CONNECT-TEST-SECRET-KEY',
      name: 'session',
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    }),
  );
};
