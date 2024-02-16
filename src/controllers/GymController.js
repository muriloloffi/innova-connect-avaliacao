const Controller = require('./Controller.js');
const GymServices = require('../services/GymServices.js');

const gymServices = new GymServices();

class GymController extends Controller {
  constructor() {
    super(gymServices);
  }

  async getAll(req, res) {
    const { name } = req.query;
    try {
      if (!name) {
        const gym = await this.entityService.getAllRecords();
        return res.status(200).json(gym);
      }
      const gym = await this.entityService.getByName(name);
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
