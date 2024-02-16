const { Router } = require('express');
const AuthController = require('../controllers/AuthController.js');
const { verifySignUp } = require('../middleware/index.js');

const router = Router();

router.post(
  '/api/auth/signup',
  [verifySignUp.checkDuplicateEmail],
  (req, res) => AuthController.signup(req, res),
);

router.post('/api/auth/signin', (req, res) => AuthController.signin(req, res));

module.exports = router;
