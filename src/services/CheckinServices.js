const { Op } = require('sequelize');
const Services = require('./Services.js');
const { Checkin } = require('../models/index.js');

const TODAY_START = new Date().setHours(0, 0, 0, 0);
const TODAY_END = new Date().setHours(23, 59, 59, 999);

class CheckinServices extends Services {
  constructor() {
    super('Checkin');
  }

  async createRecord(checkinData) {
    const dailyCheckins = await Checkin.findAndCountAll({
      where: {
        [Op.and]: [
          { user_id: checkinData.user_id },
          {
            createdAt: {
              [Op.gte]: TODAY_START,
              [Op.lte]: TODAY_END,
            },
          },
        ],
      },
    });

    if (dailyCheckins.count >= 1) {
      throw new Error('User already checked in today');
    }

    return super.createRecord(checkinData);
  }
}

module.exports = CheckinServices;
