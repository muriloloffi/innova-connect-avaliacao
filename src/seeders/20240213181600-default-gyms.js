/* eslint-disable strict */

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.bulkInsert('gyms', [
      {
        name: 'Gym 1',
        description: 'Gym 1 description',
        phone: '123456789',
        owner_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down({ context: queryInterface }) {
    await queryInterface.bulkDelete('gyms', null, {});
  },
};
