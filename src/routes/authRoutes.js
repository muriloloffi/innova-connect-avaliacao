const { Router } = require('express');
const { checkExact } = require('express-validator');
const AuthController = require('../controllers/AuthController.js');
const { verifySignUp } = require('../middleware/index.js');
const {
  userDataValidators,
  loginValidators,
} = require('../validators/requestValidators.js');

const router = Router();

router.post(
  '/api/auth/signup',
  [
    verifySignUp.checkDuplicateEmail,
    checkExact([...userDataValidators()]),
  ],
  (req, res) => AuthController.signup(req, res),
);

router.post(
  '/api/auth/signin',
  checkExact([...loginValidators()]),
  (req, res) => AuthController.signin(req, res),
);

module.exports = router;
