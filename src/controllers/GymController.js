const Controller = require('./Controller.js');
const GymServices = require('../services/GymServices.js');

const gymServices = new GymServices();

class GymController extends Controller {
  constructor() {
    super(gymServices);
  }
}

module.exports = GymController;
