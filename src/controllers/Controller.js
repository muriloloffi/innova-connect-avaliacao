class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }

  async getAll(req, res) {
    try {
      const recordsList = await this.entityService.getAllRecords();
      return res.status(200).json(recordsList);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    try {
      const newRecordData = req.body;
      const newRecord = await this.entityService.createRecord(newRecordData);
      return res.status(201).json(newRecord);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = Controller;
