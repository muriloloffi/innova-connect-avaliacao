const { Router } = require('express');
const { query, param } = require('express-validator');
const GymController = require('../controllers/GymController.js');
const { authJwt } = require('../middleware/index.js');
const {
  paginationQueryValidators,
} = require('../validators/requestValidators.js');

const router = Router();
const gymController = new GymController();

router.get(
  '/gyms',
  [
    query('name').optional().escape(),
    ...paginationQueryValidators(),
  ],
  (req, res) => gymController.getAll(req, res),
);
router.get(
  '/gym/:id',
  [param('id').trim().notEmpty().isInt()],
  (req, res) => gymController.getOne(req, res),
);
router.post(
  '/gym/create',
  [authJwt.isAdmin],
  (req, res) => gymController.create(req, res),
);
router.put(
  '/gym/update/:id',
  [
    param('id').trim().notEmpty().isInt(),
    authJwt.isAdmin,
  ],
  (req, res) => gymController.update(req, res),
);
router.delete(
  '/gym/delete/:id',
  [
    param('id').trim().notEmpty().isInt(),
    authJwt.isAdmin,
  ],
  (req, res) => gymController.delete(req, res),
);

module.exports = router;
