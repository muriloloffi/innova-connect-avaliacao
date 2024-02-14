const { Op } = require('sequelize');
const Repository = require('./Repository.js');
const { Checkin } = require('../models/index.js');

class CheckinRepository extends Repository {
  constructor() {
    super(Checkin);
  }

  async getDailyCheckinsByUser(userId) {
    const TODAY_START = new Date().setHours(0, 0, 0, 0);
    const TODAY_END = new Date().setHours(23, 59, 59, 999);

    const dailyCheckins = await this.model.findAndCountAll({
      where: {
        [Op.and]: [
          { user_id: userId },
          {
            createdAt: {
              [Op.gte]: TODAY_START,
              [Op.lte]: TODAY_END,
            },
          },
        ],
      },
    });

    return dailyCheckins;
  }
}

module.exports = CheckinRepository;
