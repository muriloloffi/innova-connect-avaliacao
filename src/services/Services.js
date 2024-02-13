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

  async updateRecord(id, updatedRecordData) {
    const datum = dbEntities[this.modelName].update(updatedRecordData, {
      where: { id },
    });
    if (datum[0] === 0) {
      return false;
    }
    return true;
  }
}

module.exports = Service;
