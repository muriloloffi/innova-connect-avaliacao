const Controller = require('./Controller.js');
const CheckinServices = require('../services/CheckinServices.js');

const checkinServices = new CheckinServices();

class CheckinController extends Controller {
  constructor() {
    super(checkinServices);
  }

  async create(req, res) {
    try {
      const { userId, gymId } = req.params;
      const checkin = await this.entityService.createRecord(
        { user_id: Number(userId), gym_id: Number(gymId) },
      );
      res.status(201).json(checkin);
    } catch (error) {
      res.status(500).json({
        message: error.message,
        error: error.stack,
      });
    }
  }
}

module.exports = CheckinController;
