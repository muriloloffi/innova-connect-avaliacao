const dbEntities = require('../models/index.js');
const { paginate } = require('../utils/pagination.js');

class Services {
  constructor(modelName) {
    this.model = dbEntities[modelName];
  }

  async getAllRecords(query) {
    return this.model.findAll(
      paginate(
        {},
        { page: query.page, pageSize: query.pageSize },
      ),
    );
  }

  async getRecordById(id) {
    return this.model.findByPk(id);
  }

  async createRecord(newRecordData) {
    return this.model.create(newRecordData);
  }

  async updateRecord(id, updatedRecordData) {
    const datum = this.model.update(updatedRecordData, {
      where: { id },
    });
    if (datum[0] === 0) {
      return false;
    }
    return true;
  }

  async deleteRecord(id) {
    const datum = await this.model.destroy({ where: { id } });
    if (datum === 0) {
      return false;
    }
    return true;
  }
}

module.exports = Services;
