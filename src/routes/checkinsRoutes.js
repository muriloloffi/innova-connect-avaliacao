const { Router } = require('express');
const CheckinController = require('../controllers/CheckinController.js');

const router = Router();
const checkinController = new CheckinController();

router.get('/checkins', (req, res) => checkinController.getAll(req, res));
router.get('/checkin/:id', (req, res) => checkinController.getOne(req, res));
router.post(
  '/checkin/create',
  (req, res) => checkinController.create(req, res),
);

module.exports = router;
