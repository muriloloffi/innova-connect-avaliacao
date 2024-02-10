const { Router } = require('express');

const UserController = require('../controllers/UserController.js');

const router = Router();

router.get('/user', UserController.index);
router.post('/user/create', UserController.create);

module.exports = router;
