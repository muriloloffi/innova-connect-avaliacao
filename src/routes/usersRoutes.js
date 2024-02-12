const { Router } = require('express');
const UserController = require('../controllers/UserController.js');

const router = Router();
const userController = new UserController();

router.get('/user', (req, res) => userController.getAll(req, res));
router.post('/user/create', UserController.create);

module.exports = router;
