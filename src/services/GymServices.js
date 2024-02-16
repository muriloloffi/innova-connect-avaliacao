const { Op } = require('sequelize');
const Services = require('./Services.js');
const { paginate } = require('../utils/pagination.js');

class GymServices extends Services {
  constructor() {
    super('Gym');
  }

  async getByName(query) {
    return this.model.findAll(
      paginate(
        { where: { name: { [Op.like]: `%${query.name}%` } } },
        { page: query.page, pageSize: query.pageSize },
      ),
    );
  }
}

module.exports = GymServices;
