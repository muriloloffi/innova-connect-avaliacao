const Controller = require('./Controller.js');
const GymServices = require('../services/GymServices.js');

const gymServices = new GymServices();

class GymController extends Controller {
  constructor() {
    super(gymServices);
  }

  async getAll(req, res) {
    const { name = '', page = 1, pageSize = 20 } = req.query;
    const query = { name, page, pageSize };

    try {
      const gym = await this.entityService.getAllRecords(query);

      if (!gym) {
        return res.status(404).json({ message: 'gym not found' });
      }
      return res.status(200).json(gym);
    } catch (error) {
      return { message: error.message };
    }
  }
}

module.exports = GymController;
