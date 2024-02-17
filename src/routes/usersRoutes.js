const { Router } = require('express');
const { query, param, checkExact } = require('express-validator');
const UserController = require('../controllers/UserController.js');
const CheckinController = require('../controllers/CheckinController.js');
const {
  paginationQueryValidators,
  userDataValidators,
} = require('../validators/requestValidators.js');
const { verifySignUp, errorHandling } = require('../middleware/index.js');

const router = Router();
const userController = new UserController();
const checkinController = new CheckinController();

router.get(
  '/users',
  [
    query('name').optional().trim().escape(),
    ...paginationQueryValidators(),
  ],
  errorHandling.handleValidation,
  (req, res) => userController.getAll(req, res),
);
router.get(
  '/user/:id',
  [param('id').trim().notEmpty().isInt()],
  errorHandling.handleValidation,
  (req, res) => userController.getOne(req, res),
);
router.put(
  '/user/update/:id',
  [
    param('id').trim().notEmpty().isInt(),
    checkExact([...userDataValidators()]),
  ],
  errorHandling.handleValidation,
  (req, res) => userController.update(req, res),
);
router.delete(
  '/user/delete/:id',
  [param('id').trim().notEmpty().isInt()],
  errorHandling.handleValidation,
  (req, res) => userController.delete(req, res),
);

// Checkin routes
router.get(
  '/user/:userId/checkins',
  [
    param('userId').trim().notEmpty().isInt(),
    ...paginationQueryValidators(),
  ],
  errorHandling.handleValidation,
  (req, res) => userController.getCheckins(req, res),
);
router.post(
  '/user/:userId/checkin/:gymId',
  [
    param('userId').trim().notEmpty().isInt(),
    param('gymId').trim().notEmpty().isInt(),
  ],
  errorHandling.handleValidation,
  (req, res) => checkinController.create(req, res),
);

module.exports = router;
