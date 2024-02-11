/* eslint-disable strict */

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'João da Silva',
        email: 'joao.silva@supergym.com',
        password: '123456',
        role: 'ROLE_ADMIN',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Maria da Silva',
        email: 'maria.silva@supergym.com',
        password: '123456',
        role: 'ROLE_ADMIN',
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
