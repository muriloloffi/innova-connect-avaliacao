const { Router } = require('express');
const UserController = require('../controllers/UserController.js');

const router = Router();
const userController = new UserController();

router.get('/users', (req, res) => userController.getAll(req, res));
router.get('/user/:id', (req, res) => userController.getOne(req, res));
router.post('/user/create', (req, res) => userController.create(req, res));
router.put('/user/update/:id', (req, res) => userController.update(req, res));

module.exports = router;
