const Controller = require('./Controller.js');
const CheckinServices = require('../services/CheckinServices.js');

const checkinServices = new CheckinServices();

class CheckinController extends Controller {
  constructor() {
    super(checkinServices);
  }
}

module.exports = CheckinController;
