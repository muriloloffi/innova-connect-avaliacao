const { paginate } = require('../utils/pagination.js');
const Services = require('./Services.js');

class UserServices extends Services {
  constructor() {
    super('User');
  }

  async getCheckinsByUser(query) {
    const user = await super.getRecordById(query.userId);
    const { offset, limit } = paginate(
      {},
      { page: query.page, pageSize: query.pageSize },
    );
    // TODO: Get checkins by user_id with just one db query
    const checkinsList = await user.getCheckins({ offset, limit });
    return checkinsList;
  }
}

module.exports = UserServices;
