const { Router } = require('express');
const authController = require('../controllers/auth.controller.js');
const { verifySignUp } = require('../middleware/index.js');

const router = Router();

router.post(
  '/api/auth/signup',
  [verifySignUp.checkDuplicateEmail],
  (req, res) => authController.singup(req, res),
);

router.post('/api/auth/signin', (req, res) => authController.signin(req, res));

module.exports = router;
