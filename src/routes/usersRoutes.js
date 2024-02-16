const { Router } = require('express');
const { param } = require('express-validator');
const UserController = require('../controllers/UserController.js');
const CheckinController = require('../controllers/CheckinController.js');

const router = Router();
const userController = new UserController();
const checkinController = new CheckinController();

router.get('/users', (req, res) => userController.getAll(req, res));
router.get('/user/:id', (req, res) => userController.getOne(req, res));
router.put('/user/update/:id', (req, res) => userController.update(req, res));
router.delete(
  '/user/delete/:id',
  (req, res) => userController.delete(req, res),
);
router.get(
  '/user/:userId/checkins',
  [param('userId').trim().notEmpty().isInt()],
  (req, res) => userController.getCheckins(req, res),
);
router.post(
  '/user/:userId/checkin/:gymId',
  (req, res) => checkinController.create(req, res),
);

module.exports = router;
