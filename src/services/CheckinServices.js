const Services = require('./Services.js');
const CheckinRepository = require('../repositories/CheckinRepository.js');

const checkinRepository = new CheckinRepository();

class CheckinServices extends Services {
  constructor() {
    super('Checkin');
    this.checkinRepository = checkinRepository;
  }

  async createRecord(checkinData) {
    const dailyCheckins = await this.checkinRepository.getDailyCheckinsByUser(
      checkinData.user_id,
    );

    if (dailyCheckins.count >= 1) {
      throw new Error('User already checked in today');
    }

    return super.createRecord(checkinData);
  }
}

module.exports = CheckinServices;
