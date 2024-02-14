const { Router } = require('express');
const GymController = require('../controllers/GymController.js');
const { authJwt } = require('../middleware/index.js');

const router = Router();
const gymController = new GymController();

router.get('/gyms', (req, res) => gymController.getAll(req, res));
router.get('/gym/:id', (req, res) => gymController.getOne(req, res));
router.post(
  '/gym/create',
  [authJwt.isAdmin],
  (req, res) => gymController.create(req, res),
);
router.put(
  '/gym/update/:id',
  [authJwt.isAdmin],
  (req, res) => gymController.update(req, res),
);
router.delete(
  '/gym/delete/:id',
  [authJwt.isAdmin],
  (req, res) => gymController.delete(req, res),
);

module.exports = router;
