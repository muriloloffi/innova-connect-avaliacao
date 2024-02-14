/* eslint-disable strict */

'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'João da Silva',
        email: 'joao.silva@supergym.com',
        password: bcrypt.hashSync('123456', 8),
        role: 'ROLE_ADMIN',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Maria da Silva',
        email: 'maria.silva@supergym.com',
        password: bcrypt.hashSync('123456', 8),
        role: 'ROLE_ADMIN',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'José da Silva',
        email: 'jose.silva@cmail.com',
        password: bcrypt.hashSync('123456', 8),
        role: 'ROLE_USER',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down({ context: queryInterface }) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
