class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }

  async getAll(req, res) {
    const { page = 1, pageSize = 20 } = req.query;

    try {
      const recordsList = await this.entityService.getAllRecords(
        { page, pageSize },
      );
      return res.status(200).json(recordsList);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const record = await this.entityService.getRecordById(Number(id));
      if (!record) {
        return res.status(404).json({ message: 'record not found' });
      }
      return res.status(200).json(record);
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

  async update(req, res) {
    try {
      const { id } = req.params;
      const updatedRecordData = req.body;
      const wasRecordUpdated = await this.entityService.updateRecord(
        Number(id),
        updatedRecordData,
      );
      if (!wasRecordUpdated) {
        return res.status(400).json({ message: 'update failed' });
      }
      return res.status(200).json({ message: 'update successful' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const wasRecordDeleted = await this.entityService.deleteRecord(
        Number(id),
      );
      if (!wasRecordDeleted) {
        return res.status(404).json({ message: 'id not found' });
      }
      return res.status(200).json({
        message: `id ${id} successfully deleted`,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Controller;
