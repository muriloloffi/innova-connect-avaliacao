const { Router } = require('express');
const {
  query,
  param,
  checkExact,
  body,
} = require('express-validator');
const UserController = require('../controllers/UserController.js');
const CheckinController = require('../controllers/CheckinController.js');
const { paginationValidators } = require('../validators/queryValidators.js');
const { verifySignUp } = require('../middleware/index.js');

const router = Router();
const userController = new UserController();
const checkinController = new CheckinController();

router.get(
  '/users',
  [
    query('name').optional().trim().escape(),
    ...paginationValidators(),
  ],
  (req, res) => userController.getAll(req, res),
);
router.get(
  '/user/:id',
  [param('id').trim().notEmpty().isInt()],
  (req, res) => userController.getOne(req, res),
);
router.put(
  '/user/update/:id',
  [
    param('id').trim().notEmpty().isInt(),
    verifySignUp.checkDuplicateEmail,
    checkExact([
      body('name').optional().isString().escape(),
      body('email').optional().isEmail().normalizeEmail(),
      body('password').optional().isString().isLength({ min: 6 }),
    ]),
  ],
  (req, res) => userController.update(req, res),
);
router.delete(
  '/user/delete/:id',
  [param('id').trim().notEmpty().isInt()],
  (req, res) => userController.delete(req, res),
);

// Checkin routes
router.get(
  '/user/:userId/checkins',
  [
    param('userId').trim().notEmpty().isInt(),
    ...paginationValidators(),
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
