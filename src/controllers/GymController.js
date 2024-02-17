const { validationResult } = require('express-validator');
const Controller = require('./Controller.js');
const GymServices = require('../services/GymServices.js');

const gymServices = new GymServices();

class GymController extends Controller {
  constructor() {
    super(gymServices);
  }

  async getAll(req, res) {
    if (validationResult(req).errors.length > 0) {
      return res.status(400).json({ message: 'Invalid values for query' });
    }

    const { name = '', page = 1, pageSize = 20 } = req.query;
    const query = { name, page, pageSize };

    try {
      if (!query.name) {
        const gym = await this.entityService.getAllRecords(query);
        return res.status(200).json(gym);
      }
      const gym = await this.entityService.getByName(query);

      if (gym.length === 0) {
        return res.status(404).json({ message: 'gym not found' });
      }
      return res.status(200).json(gym);
    } catch (error) {
      return { message: error.message };
    }
  }
}

module.exports = GymController;
