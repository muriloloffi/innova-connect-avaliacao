const dbEntities = require('../models/index.js');

class Service {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAllRecords() {
    return dbEntities[this.modelName].findAll();
  }
}

module.exports = Service;
