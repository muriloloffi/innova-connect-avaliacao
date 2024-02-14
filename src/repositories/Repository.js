class Repository {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    return this.model.findAll();
  }

  async getOne(id) {
    return this.model.findByPk(id);
  }

  async create(record) {
    return this.model.create(record);
  }

  async update(record, id) {
    return this.model.update(record, { where: { id } });
  }

  async delete(id) {
    return this.model.destroy({ where: { id } });
  }
}

module.exports = Repository;
