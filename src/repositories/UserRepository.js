const Repository = require('./Repository.js');
const { User } = require('../models/index.js');

class UserRepository extends Repository {
  constructor() {
    super(User);
  }

  async getUserByEmail(email) {
    const user = await this.model.findOne({
      where: {
        email,
      },
    });

    return user;
  }
}

module.exports = UserRepository;
