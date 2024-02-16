const { Op } = require('sequelize');
const Services = require('./Services.js');

class GymServices extends Services {
  constructor() {
    super('Gym');
  }

  async getByName(query) {
    return this.model.findAll({
      where: {
        name: { [Op.like]: `%${query.name}%` },
      },
      offset: query.offset,
      limit: query.limit,
    });
  }
}

module.exports = GymServices;
