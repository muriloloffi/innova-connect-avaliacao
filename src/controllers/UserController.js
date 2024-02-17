const { validationResult } = require('express-validator');
const Controller = require('./Controller.js');
const UserServices = require('../services/UserServices.js');

const userServices = new UserServices();

class UserController extends Controller {
  constructor() {
    super(userServices);
  }

  async getCheckins(req, res) {
    if (validationResult(req).errors.length > 0) {
      return res.status(400).json({ message: 'Invalid values for query' });
    }

    const { userId } = req.params;
    const { page = 1, pageSize = 20 } = req.query;
    const query = { userId, page, pageSize };

    try {
      const checkinsList = await this.entityService.getCheckinsByUser(query);
      return res.status(200).json(checkinsList);
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = UserController;
