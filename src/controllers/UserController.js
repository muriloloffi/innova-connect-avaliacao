const database = require('../models/index.js');

class UserController {
  static async index(req, res) {
    try {
      const usersList = await database.User.findAll();
      return res.status(200).json(usersList);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
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
