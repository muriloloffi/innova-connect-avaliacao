const { Op } = require('sequelize');
const Services = require('./Services.js');

class GymServices extends Services {
  constructor() {
    super('Gym');
  }

  async getByName(name) {
    return this.model.findAll({
      where: {
        name: { [Op.like]: `%${name}%` },
      },
    });
  }
}

module.exports = GymServices;
