const { Router } = require('express');
const { param } = require('express-validator');
const UserController = require('../controllers/UserController.js');
const CheckinController = require('../controllers/CheckinController.js');
const { paginationValidator } = require('../validators/queryValidators.js');

const router = Router();
const userController = new UserController();
const checkinController = new CheckinController();

router.get(
  '/users',
  [...paginationValidator()],
  (req, res) => userController.getAll(req, res),
);
router.get('/user/:id', (req, res) => userController.getOne(req, res));
router.put('/user/update/:id', (req, res) => userController.update(req, res));
router.delete(
  '/user/delete/:id',
  (req, res) => userController.delete(req, res),
);

// Checkin routes
router.get(
  '/user/:userId/checkins',
  [
    param('userId').trim().notEmpty().isInt(),
    ...paginationValidator(),
  ],
  (req, res) => userController.getCheckins(req, res),
);
router.post(
  '/user/:userId/checkin/:gymId',
  [
    param('userId').trim().notEmpty().isInt(),
    param('gymId').trim().notEmpty().isInt(),
  ],
  (req, res) => checkinController.create(req, res),
);

module.exports = router;
