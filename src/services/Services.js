const dbEntities = require('../models/index.js');

class Service {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAllRecords() {
    return dbEntities[this.modelName].findAll();
  }

  async createRecord(newRecordData) {
    return dbEntities[this.modelName].create(newRecordData);
  }
}

module.exports = Service;
