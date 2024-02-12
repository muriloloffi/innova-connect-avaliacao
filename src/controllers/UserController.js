const Controller = require('./Controller.js');
const UserServices = require('../services/UserServices.js');

const userServices = new UserServices();

class UserController extends Controller {
  constructor() {
    super(userServices);
  }

  static async create(req, res) {
    const {
      name, email, password, role, active,
    } = req.body;
    try {
      const createdUser = await database.User.create({
        name, email, password, role, active,
      });
      return res.json(createdUser);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = UserController;
