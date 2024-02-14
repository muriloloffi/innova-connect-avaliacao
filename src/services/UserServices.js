const Services = require('./Services.js');

class UserServices extends Services {
  constructor() {
    super('User');
  }

  async getCheckinsByUser(userId) {
    const user = await super.getRecordById(userId);
    const checkinsList = await user.getCheckins();
    return checkinsList;
  }
}

module.exports = UserServices;
