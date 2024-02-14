const Controller = require('./Controller.js');
const UserServices = require('../services/UserServices.js');

const userServices = new UserServices();

class UserController extends Controller {
  constructor() {
    super(userServices);
  }

  async getCheckins(req, res) {
    try {
      const { userId } = req.params;
      const checkinsList = await this.entityService.getCheckinsByUser(userId);
      res.status(200).json(checkinsList);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = UserController;
